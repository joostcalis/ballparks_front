import React from 'react';
import jQuery from 'jquery';
import ReviewItem from "./ReviewItem"

class ReviewList extends React.Component {
  constructor(){
    super();
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    this.setState({
      reviews: this.props.reviews
    });
  }

  render(){
    return(
      <div className="r review-list-margin">
        <div className="c6">
          <div className="p-group" id="accordion">
            {this.props.reviews.map(function(review, i) {
              return (
                <ReviewItem key={review.id} id={review.id} concession={review.concession} extra_activity_rating={review.extra_activity_rating} general_experience={review.general_experience} description={review.description} overall_rating={review.overall_rating} name={review.name} />
              );
            }, this)}
          </div>
        </div>
        <div className="c6">
        </div>
      </div>
    );
  }
}

export default ReviewList;
