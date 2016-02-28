import React from 'react';
import jQuery from 'jquery';
import ReviewList from 'ReviewList';

class Ballpark extends React.Component {
 constructor() {
   super();
   this.state = {
     ballpark: {}
   };
 }

 componentDidMount() {
   this.getBallpark();
 }

 getBallpark(){
   let BallparkId = this.props.params.ballparkId;
   let component = this;

   jQuery.getJSON("https://ballparks.herokuapp.com/ballparks/" + BallparkId + ".json", function(data) {

     console.log("getting single ballpark from server");

     component.setState({
       ballpark: data.ballpark
     });
   });
 }

 render() {
   return(
     <div>
       <ul>
       <li><strong>{this.state.ballpark.name} ({this.state.ballpark.average_rating})</strong></li>
       <li><em>Team:</em> {this.state.ballpark.team}</li>
       <li><em>City:</em> {this.state.ballpark.city}</li>
       <li><em>Info:</em> {this.state.ballpark.description}</li>
       </ul>
     </div>
     <div>
     <ReviewList ballparkId={this.props.params.ballparkId} />
     </div>
   );
 }
}

export default Ballpark;
