import React from "react";


export default class Review extends React.Component {
    onTrigger = (event) => {
      this.props.handleCallback(event.target.review.value);
      event.preventDefault();
    };
  
    render() {
      return (
        <div>
          <form onSubmit={this.onTrigger}>
            <textarea
              className="form-control"
              type="text"
              name="review"
              placeholder="Leave a review"
            />{" "}
            <br />
            <button className="btn btn-primary" type="submit" value="Submit">
              {" "}
              Submit{" "}
            </button>
          </form>
          <br />
        </div>
      );
    }
  }