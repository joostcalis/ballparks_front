import React from 'react';
import jQuery from 'jquery';
import ReviewItem from "./ReviewItem"
import ReviewForm from "./ReviewForm"
import model from "./Model";

class ReviewList extends React.Component {
  constructor(){
    super();
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    this.displayReviews();
  }

  displayReviews() {
    let component = this;
    let ballparkId = this.props.ballparkId;

    function onDone(data) {
       console.log("loading reviews attached to ballpark");

       component.setState({
          reviews: data.reviews
       });

       component.props.onChange();
    }

    model.ballparkReviews.index( onDone, ballparkId );
  }

  render(){
    return(
      <div className="r review-list-margin">
        <div className="c6">
          <div className="p-group" id="accordion">
            {this.state.reviews.map(function(review, i) {
              return (
                <ReviewItem key={review.id} id={review.id} concession={review.concession} extra_activity_rating={review.extra_activity_rating} general_experience={review.general_experience} description={review.description} overall_rating={review.overall_rating} name={review.name} />
              );
            }, this)}
          </div>
        </div>
        <div className="c6">
          <ReviewForm onChange={this.displayReviews.bind(this)} ballparkId={this.props.ballparkId} />
        </div>
      </div>
    );
  }
}

export default ReviewList;
