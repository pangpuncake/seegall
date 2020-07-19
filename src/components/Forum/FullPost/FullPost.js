import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import Spinner from "../../Layout/UI/Spinner/Spinner";
import Input from "../../Layout/UI/Input/Input";
import Button from "../../Layout/UI/Button/Button";
import Response from "./Response/Response";
import PopUp from "../../Layout/PopUp/PopUp";
import "../../../../node_modules/codemirror/lib/codemirror.css";
import { Controlled as CodeMirror } from "react-codemirror2";
require("codemirror/mode/xml/xml");
require("codemirror/mode/javascript/javascript");

class FullPost extends Component {
  state = {
    controls: {
      response: {
        elementType: "input",
        elementConfig: {
          type: "response",
          placeholder: "Write your response here!",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
    },
    showDeleteConfirmation: false,
    deleted: false,
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
    if (this.props.email) {
      event.preventDefault();
      this.props.uploadResponse(
        this.props.id,
        this.props.email,
        this.state.controls.response.value
      );
      this.setState({
        controls: {
          response: {
            elementType: "input",
            elementConfig: {
              type: "response",
              placeholder: "Write your response here!",
            },
            value: "",
            validation: {
              required: true,
            },
            valid: false,
            touched: false,
          },
        },
      });
    } else {
      alert("Please login first!");
      event.preventDefault();
    }
  };

  deletePostHandler = (id) => {
    console.log("deletePostHandler called");
    this.props.deletePost(id);
    this.setState((prevState) => {
      return {
        showDeleteConfirmation: !prevState.showDeleteConfirmation,
        deleted: true,
      };
    });
  };

  toggleDeletePopUpHandler = () => {
    console.log("togglePopUp called!");
    this.setState((prevState) => {
      return {
        showDeleteConfirmation: !prevState.showDeleteConfirmation,
      };
    });
  };

  componentDidMount() {
    console.log("full post props below");
    console.log(this.props);
    this.loadData();
  }

  componentDidUpdate() {
    if (!this.state.deleted) {
      this.loadData();
    }
  }

  loadData() {
    if (this.props.match.params.id) {
      if (
        !this.props.loadedPost ||
        (this.props.loadedPost && this.props.id !== this.props.match.params.id)
      ) {
        this.props.fetchFullPost(this.props.match.params.id);
      }
    }
  }

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

    let post = this.state.deleted ? (
      <h2>This post has been deleted. Sorry!</h2>
    ) : (
      <Spinner />
    );
    if (
      !this.props.loading &&
      this.props.loadedPost !== null &&
      this.props.loadedPost !== undefined
    ) {
      let responseArray = <p>No replies. Be the first one!</p>;
      if (this.props.loadedPost.responses !== undefined) {
        responseArray = Object.keys(this.props.loadedPost.responses).map(
          (key) => {
            return (
              <Response
                key={key}
                response={this.props.loadedPost.responses[key].response}
                resEmail={this.props.loadedPost.responses[key].email}
                responseID={key}
              />
            );
          }
        );
      }

      let deletePostButton =
        this.props.email === this.props.loadedPost.email ? (
          <Button
            btnType="Danger"
            clicked={() => this.toggleDeletePopUpHandler()}
          >
            Delete Post
          </Button>
        ) : null;

      const options = {
        lineNumbers: true,
        mode: "javascript",
        theme: "midnight",
        spellcheck: true,
        autocorrect: true,
      };

      let codemirror = this.props.loadedPost.code ? (
        <div style={{ textAlign: "left" }}>
          <CodeMirror
            value={this.props.loadedPost.code}
            className={"CodeMirror"}
            options={options}
          />
        </div>
      ) : null;

      console.log(this.props.loadedPost);
      post = (
        <div style={{ textAlign: "center", paddingTop: "5%" }}>
          <h2>{this.props.loadedPost.title}</h2>
          {codemirror}
          <p>{this.props.loadedPost.question}</p>
          <div style={{ textAlign: "right" }}>
            <p>Posted by: {this.props.loadedPost.email}</p>
          </div>
          {deletePostButton}
          <div>{responseArray}</div>
          <form onSubmit={this.submitHandler}>
            {form}
            <Button btnType="Success">Reply</Button>
          </form>
          <p>{this.state.controls.response.value}</p>
        </div>
      );
    }

    return (
      <Fragment>
        <PopUp
          show={this.state.showDeleteConfirmation}
          clicked={() => this.toggleDeletePopUpHandler()}
        >
          <h3>Are you sure you want to delete this post?</h3>
          <Button
            btnType="Danger"
            clicked={() => this.deletePostHandler(this.props.id)}
          >
            Confirm
          </Button>
          <Button
            btnType="Success"
            clicked={() => this.toggleDeletePopUpHandler()}
          >
            Cancel
          </Button>
        </PopUp>
        {post}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.fullpost.id,
    loadedPost: state.fullpost.loadedPost,
    error: state.fullpost.error,
    loading: state.fullpost.loading,
    email: state.auth.email,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFullPost: (id) => dispatch(actions.fetchFullPost(id)),
    uploadResponse: (id, email, value) =>
      dispatch(actions.uploadResponse(id, email, value)),
    deletePost: (id) => dispatch(actions.deletePost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FullPost);
