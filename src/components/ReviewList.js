import React from "react";
import Review from "./Review";

export default class ReviewList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        allReviews: props.allReviews,
      };
    }
  
    handleCallback = (reviewData) => {
      this.setState({ allReviews: reviewData });
    };
  
    render() {
      let { allReviews } = this.state;
  
      return (
        <div>
          <div>{allReviews}</div>
          <div>
            <Review handleCallback={this.handleCallback} />
          </div>
        </div>
      );
    }
  }