import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";
import Spinner from "../../../Layout/UI/Spinner/Spinner";
import Post from "../../Post/Post";
import Button from "../../../Layout/UI/Button/Button";

class Posts extends Component {
  state = {
    oldNumber: 5,
    showNumber: 5,
    disableShowMore: false,
  };

  componentDidMount() {
    // console.log("Posts props are below!");
    // console.log(this.props);
    this.props.onFetch();
  }

  componentDidUpdate() {
    if (this.state.oldNumber !== this.state.showNumber) {
      this.props.onFetch();
      this.setState({
        oldNumber: this.state.showNumber,
      });
    }
  }

  postSelectedHandler = (id) => {
    // console.log("postSelectedHandler!");
    // this.props.history.push({pathname: '/forum/home/' + id});
    this.props.history.push("/forum/home/" + id);
  };

  showMoreHandler = () => {
    // console.log("clicked");
    if (this.props.posts && this.state.showNumber < this.props.posts.length) {
      this.setState((prevState) => {
        return {
          showNumber: prevState.showNumber + 5,
        };
      });
    } else {
      this.setState({
        disableShowMore: true,
      });
    }
  };

  render() {
    let postsArray = <Spinner />;

    if (this.props.posts && !this.props.error && !this.props.loading) {
      postsArray = this.props.posts
        .slice(0, this.state.showNumber)
        .map((post) => {
          //console.log(post.question)
          //console.log(post.id)
          return (
            <Post
              key={post.id}
              title={post.title}
              email={post.email}
              clicked={() => this.postSelectedHandler(post.id)}
            />
          );
        });
    }
    return (
      <div style={{ textAlign: "center", marginLeft: "15%", padding: "2%" }}>
        <p style={{ color: "black" }}>~~~~~~ Searchbar ~~~~~~</p>
        {postsArray}
        <Button
          btnType="Success"
          clicked={() => this.showMoreHandler()}
          disabled={this.state.disableShowMore}
        >
          Show more posts
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    error: state.posts.error,
    loading: state.posts.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetch: () => dispatch(actions.fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
