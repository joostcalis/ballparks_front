import React from 'react';
import jQuery from 'jquery';

class ReviewForm extends React.Component {
  constructor() {
    super();
  }

  createReview(event) {
    event.preventDefault();

    let component = this;
    let ballparkId = this.props.ballparkId;
    let general_experience = this.refs.generalExperienceInput.value;
    let concession = this.refs.concessionInput.value;
    let extra_activity_rating = this.refs.extraActivityInput.value;
    let description = this.refs.descriptionInput.value;
    let overall_rating = Math.round(this.getOverallRating(general_experience, concession, extra_activity_rating));


    let newReview = {
      id: null,
      general_experience: general_experience,
      concession: concession,
      extra_activity_rating: extra_activity_rating,
      description: description,
      overall_rating: overall_rating
    };

    jQuery.ajax({
      type: "POST",
      url: "https://ballparks.herokuapp.com/ballparks/" + ballparkId + "/reviews.json",
      data: JSON.stringify({
          review: newReview
      }),
      contentType: "application/json",
      dataType: "json"
    })
      .done(function(data) {
        component.props.onChange();
        component.refs.generalExperienceInput.value = "";
        component.refs.concessionInput.value = "";
        component.refs.extraActivityInput.value = "";
        component.refs.descriptionInput.value = "";
      })

      .fail(function(error) {
        console.log(error);
      });
  }

  getOverallRating(a,b,c) {
    let sum = (a * 1) + (b * 1) + (c * 1);
    let overallRating = sum / 3;
    return overallRating;
  }


  render() {
    return(
      <div>
        <form onSubmit={this.createReview.bind(this)}>
            <p> rate your general experience
              <input type="integer" ref="generalExperienceInput" placeholder="rate ur general experience"/>
            </p>
            <p> rate the concessions
              <input type="integer" ref="concessionInput" placeholder="rate the concessions"/>
            </p>
            <p> rate extra activities in the ballpark
              <input type="integer" ref="extraActivityInput" placeholder="extra activities"/>
            </p>
            <p> add a comment about your experience
              <textarea type="text" rows="5" placeholder="comment"  ref="descriptionInput"/>
            </p>
            <button type="submit">Add Review</button>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
