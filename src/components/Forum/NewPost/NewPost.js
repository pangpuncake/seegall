import React, { Component, Fragment } from 'react'
import Input from '../../Layout/UI/Input/Input'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'
import Button from '../../Layout/UI/Button/Button'
import Spinner from '../../Layout/UI/Spinner/Spinner'
import PopUp from '../../Layout/PopUp/PopUp'
import CodeMirrorEditor from '../../CodeMirrorEditor/CodeMirrorEditor'

class NewPost extends Component {
    state = {
        controls: {
            question: {
                elementType: "input",
                elementConfig: {
                    type: "question",
                    placeholder: "Write your question here!",
                },
                validation: {
                    isQuestion: true,
                    required: true,
                },
                value: "",
                touched: false,
                valid: false,
            },
        },
        showNewPost: false,
    };

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(
                    event.target.value,
                    this.state.controls[controlName].validation
                ),
                touched: true,
            },
        };
        this.setState({ controls: updatedControls });
    };

    checkValidity = (value, rules) => {
        let isValid = true;
        if (!rules) {
            return isValid;
        }
        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }
        return isValid;
    };

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onPost(this.props.email, this.state.controls.question.value);
    };

    showPostToggleHandler = () => {
        this.setState((prevState) => {
            return {
                showNewPost: !prevState.showNewPost,
            };
        });
    };

    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event, formElement.id)} />
        ));

        let newPost =
            (<Fragment>
                <h2>Create your post!</h2>
                <form onSubmit={this.submitHandler}>
                    <CodeMirrorEditor />
                    {form}
                    <Button btnType='Success'>Submit</Button>
                </form>
            </Fragment>)

        if (this.props.loading) {
            newPost = <Spinner />
        }

        if (this.props.uploaded) {
            newPost = <h3>Your post has been successfully uploaded!</h3>
        }

        if (this.props.error) {
            newPost =
                <Fragment>
                    <h3>Oops! Something went wrong!</h3>
                    <p>Error: {this.props.error.message}</p>
                </Fragment>
        }

        if (this.props.email === '') {
            newPost = <h3>Please log in or sign up first!</h3>
        }

        return (
            <div style={{ textAlign: 'center' }}>
                <PopUp show={this.state.showNewPost} click={this.showPostToggleHandler} >
                    {newPost}
                </PopUp>
                <h2>Have a burning question that needs answering?</h2>
                <Button btnType='Success' clicked={this.showPostToggleHandler}>Create post!</Button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.post.loading,
        error: state.post.error,
        email: state.auth.email,
        uploaded: state.post.uploaded,
        code: state.post.code
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPost: (email, code, value) => dispatch(actions.submitPost(email, code, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
