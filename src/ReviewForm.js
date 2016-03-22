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
        <form role="form" className="form-main" onSubmit={this.createReview.bind(this)}>
          <div className="container-f form-card">
            <div className="r">
              <div className="c12">
                <h3> Visited this ballpark? Leave a Review! </h3>
              </div>
              </div>
                <div className="r form-row">
                  <div className="c12">
                    <div className="f-group">
                      <div className="medium-form">
                        <p><label>Name:</label></p>
                          <input type="text" ref="nameInput" className="f-control"></input>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="r form-row">
                  <div className="c4">
                    <div className="f-group">
                      <div className="small-form first-small-form">
                        <p><label>General:</label></p>
                          <select className="f-control" ref="generalExperienceInput">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                      </div>
                    </div>
                  </div>
                  <div className="c4">
                    <div className="f-group">
                      <div className="small-form selector">
                        <p><label>Food:</label></p>
                          <select className="f-control" ref="concessionInput">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                      </div>
                    </div>
                  </div>
                  <div className="c4">
                    <div className="f-group">
                      <div className="small-form selector">
                        <p><label>Extra:</label></p>
                          <select className="f-control" ref="extraActivityInput">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="r form-row">
                  <div className="c12">
                    <div className="f-group">
                      <p><label>Say something about your visit:</label></p>
                      <textarea className="f-control" rows="8" ref="descriptionInput"></textarea>
                    </div>
                  </div>
                </div>
                <div className="r">
                  <div className="c12">
                    <button type="submit" className="formbutton">Add Review</button>
                  </div>
                </div>
              </div>
      </form>
    );
  }
}

export default ReviewForm;
