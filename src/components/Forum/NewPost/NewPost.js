import React, { Component, Fragment } from "react";
import Input from "../../Layout/UI/Input/Input";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import Button from "../../Layout/UI/Button/Button";
import Spinner from "../../Layout/UI/Spinner/Spinner";
import CodeMirrorEditor from "../../CodeMirrorEditor/CodeMirrorEditor";

class NewPost extends Component {
  state = {
    controls: {
      title: {
        elementType: "input",
        elementConfig: {
          type: "title",
          placeholder: "Write your title here!",
        },
        validation: {
          isTitle: true,
          required: true,
        },
        value: "",
        touched: false,
        valid: false,
      },
      question: {
        elementType: "textarea",
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
    this.props.onPost(
      this.props.email,
      this.props.code,
      this.state.controls.title.value,
      this.state.controls.question.value
    );
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key],
      });
    }

    let form = formElementsArray.map((formElement) => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={(event) => this.inputChangedHandler(event, formElement.id)}
      />
    ));

    let newPost = (
      <Fragment>
        <h2>Create your post!</h2>
        <form onSubmit={this.submitHandler}>
          <CodeMirrorEditor />
          {form}
          <Button btnType="Success">Submit</Button>
        </form>
      </Fragment>
    );

    if (this.props.loading) {
      newPost = <Spinner />;
    }

    if (this.props.uploaded) {
      newPost = (
        <Fragment>
          <h3>Your post has been successfully uploaded!</h3>
          <Button btnType="Success" clicked={this.props.createPost}>
            Create another post!
          </Button>
        </Fragment>
      );
    }

    if (this.props.error) {
      newPost = (
        <Fragment>
          <h3>Oops! Something went wrong!</h3>
          <p>Error: {this.props.error.message}</p>
        </Fragment>
      );
    }

    if (this.props.email === "") {
      newPost = (
        <h1 style={{ paddingTop: "10%" }}>Please log in or sign up first!</h1>
      );
    }

    return (
      <div style={{ textAlign: "center", marginLeft: "15%", padding: "2%" }}>
        {newPost}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.post.loading,
    error: state.post.error,
    email: state.auth.email,
    uploaded: state.post.uploaded,
    code: state.post.code,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPost: (email, code, title, value) =>
      dispatch(actions.submitPost(email, code, title, value)),
    createPost: () => dispatch(actions.createNewPost()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
