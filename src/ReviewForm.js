import React from 'react';
import jQuery from 'jquery';
import model from './Model';

class ReviewForm extends React.Component {
  constructor() {
    super();
  }

  createReview(event) {
    event.preventDefault();

    let component = this;
    let ballparkId = this.props.ballparkId;
    let name = this.refs.nameInput.value;
    let general_experience = this.refs.generalExperienceInput.value;
    let concession = this.refs.concessionInput.value;
    let extra_activity_rating = this.refs.extraActivityInput.value;
    let description = this.refs.descriptionInput.value;
    let overall_rating = Math.round(this.getOverallRating(general_experience, concession, extra_activity_rating));

    let newReview = {
      id: null,
      name: name,
      general_experience: general_experience,
      concession: concession,
      extra_activity_rating: extra_activity_rating,
      description: description,
      overall_rating: overall_rating
    };

    function onDone(data) {
      component.props.onChange();
      component.refs.nameInput.value = "";
      component.refs.generalExperienceInput.value = "";
      component.refs.concessionInput.value = "";
      component.refs.extraActivityInput.value = "";
      component.refs.descriptionInput.value = "";
    }

      function onFail(error) {
         console.log(error);
      }

      model.ballparkReviews.create( newReview, onDone, onFail, ballparkId );
  }

  getOverallRating(a,b,c) {
    let sum = (a * 1) + (b * 1) + (c * 1);
    let overallRating = sum / 3;
    return overallRating;
  }

  render() {
    return(
        <form role="form" onSubmit={this.createReview.bind(this)}>
          <h3> Visited this ballpark? Leave a Review! </h3>
          <div className="f-group">
            <label>Name:</label>
            <input type="text" ref="nameInput" className="f-control"></input>
          </div>
          <div className="f-group">
            <label>General Experience:</label>
            <select className="f-control" ref="generalExperienceInput">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="f-group">
            <label>Food & Beverage:</label>
            <select className="f-control" ref="concessionInput">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="f-group">
            <label>Extra activities:</label>
            <select className="f-control" ref="extraActivityInput">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="f-group">
            <label>Say something about your visit:</label>
            <textarea className="f-control" rows="3" ref="descriptionInput"></textarea>
          </div>
        <button type="submit" className="formbutton">Add Review</button>
      </form>
    );
  }
}

export default ReviewForm;
