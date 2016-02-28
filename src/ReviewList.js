import React from 'React';
import jQuery from 'jquery';
import ReviewItem from "./ReviewItem"

class ReviewList extends React.Component {
  Constructor(){
    super();
    this.state = {
      reviews: []
    };
  }

  componentDidMount(){
    let component = this;
    let ballparkId = this.props.ballparkId;


    jQuery.getJSON("https://ballparks.herokuapp.com/ballparks/" + ballparkId + ".json", function(data) {
      console.log("getting reviews attached to ballpark");
      component.setState({
        reviews: data.reviews
      });
    });
  }

  render(){
    return(
      <ul>
        {this.state.tasks.map(function(task, i) {
          return (
            < ReviewItem key={review.id} id={review.id} concession={review.concession} extra_activity_rating={review.extra_activity_rating} general_experience={review.general_experience} description={review.description} />
          );
        }, this)}
      </ul>
    );
  }
}

export default ReviewList;