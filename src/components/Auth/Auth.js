import React, { Component, Fragment } from 'react'
import PopUp from '../Layout/PopUp/PopUp'
import Input from '../../components/Layout/UI/Input/Input'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import Button from '../Layout/UI/Button/Button'
import Spinner from '../Layout/UI/Spinner/Spinner'

class Auth extends Component {

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },

        isSignup: false
    }

    signUpHandler = () => {
        this.setState({
            isSignup: true
        })
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        };
        this.setState({controls: updatedControls});
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
    }

    resetPasswordHandler = () => {
        this.props.onReset(this.state.controls.email.value);
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup};
        });
    }

    render() {

        const formElementsArray = [];
        for ( let key in this.state.controls ) {
            formElementsArray.push( {
                id: key,
                config: this.state.controls[key]
            } );
        }

        const form = formElementsArray.map( formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
        ) );
        
        let errorMessage = null;
        if (this.props.error) {
            switch(this.props.error.message) {
                case('INVALID_PASSWORD'): {
                    errorMessage = (
                        <Fragment>
                            <p>Wrong Password!</p>
                            <p 
                                style = {{cursor: 'pointer'}} 
                                onClick = {this.resetPasswordHandler}>
                                Forgot Password? Click Me!
                            </p>
                        </Fragment>
                    )
                    break;
                }
                
                case('EMAIL_NOT_FOUND'): {
                    errorMessage = (
                        <p>Email does not exist!</p>
                    )
                    break;
                }
                case('USER_DISABLED'): {
                    errorMessage = (
                        <p>You have been disabled!</p>
                    )
                    break;
                }
                case('EMAIL_EXISTS'): {
                    errorMessage = (
                        <p>Email exists! Try another!</p>
                    )
                    break;
                }
                case('TOO_MANY_ATTEMPTS_TRY_LATER'): {
                    errorMessage = (
                        <p>Too many attempts! Please try again later.</p>
                    )
                    break;
                }
                case('SENT_RESET'): {
                    errorMessage = (
                        <Fragment>
                            <p>Please check your email to reset password.</p>
                            <p 
                                style = {{cursor: 'pointer'}} 
                                onClick = {this.resetPasswordHandler}>
                                Didn't receive it? Click here to resend.
                            </p>
                        </Fragment>
                    )
                    break;
                }
                default: {
                    errorMessage = this.props.error.message
                }
            }
        }
        return (
            <div style={{textAlign: 'center'}}>
                <PopUp show = {this.props.show} click = {this.props.click}>
                    <h1>{this.state.isSignup ? 'Sign Up' : 'Sign In'}</h1>
                    {this.props.loading 
                        ? <Spinner /> 
                        : <form onSubmit={this.submitHandler}>
                            {form} 
                            {errorMessage}
                            <Button btnType = 'Success'>Submit</Button>
                        </form>}
                    <Button 
                        clicked={this.switchAuthModeHandler}
                        btnType="Danger">SWITCH TO {this.state.isSignup ? 'SIGN IN' : 'SIGN UP'}
                    </Button>

                </PopUp>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        onReset: (email) => dispatch(actions.resetPassword(email))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
