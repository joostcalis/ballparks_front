import React from 'react';
import jQuery from 'jquery';

class ReviewItem extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      concession: this.props.concession,
      extra_activity_rating: this.props.extra_activity_rating,
      general_experience: this.props.general_experience,
      description: this.props.description,
    });
  }

  render() {
    return(
      <div className="pan-def">
        <div className="p-heading">
          <h4 className="p-title">
            <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">{this.props.name} gave an overall rating of: {this.props.overall_rating}</a>
          </h4>
        </div>
        <div id="collapse1" className="p-collapse">
          <div className="p-body">
            <p>general experience rating: {this.props.general_experience}</p>
            <p>extra activity rating: {this.props.extra_activity_rating}</p>
            <p>concession rating: {this.props.concession}</p>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewItem;
