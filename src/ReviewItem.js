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
      <li>
        <p>overall rating: {this.props.overall_rating}</p>
        <p>general experience rating: {this.props.general_experience}</p>
        <p>extra activity rating: {this.props.extra_activity_rating}</p>
        <p>concession rating: {this.props.concession}</p>
        <p>{this.props.description}</p>
      </li>
    );
  }
}

export default ReviewItem;
