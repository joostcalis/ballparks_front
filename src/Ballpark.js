import React from 'react';
import jQuery from 'jquery';
import ReviewList from './ReviewList';
import model from "./Model";

class Ballpark extends React.Component {
 constructor() {
   super();
   this.state = {
     ballpark: {},
     average_rating: "",
     reviews: []
   };
 }

 componentDidMount() {
   this.getBallpark();
 }

 getBallpark(){
   console.log("getting single ballpark from server");
   let ballparkId = this.props.params.ballparkId;
   let component = this;

   function onDone(data) {
     component.setState({
       ballpark: data.ballpark,
       average_rating: data.average_rating
     });
   }

   model.ballparks.show(onDone, ballparkId);

 }

 render() {
   return(
     <div className="cont">
      <div className="r-header">
        <div className="column1">
          <h2>{this.state.ballpark.league}</h2>
        </div>
        <div className="column2">
          <h1>{this.state.ballpark.name} ({this.state.average_rating})</h1>
        </div>
        <div className="column3">
          <h2>{this.state.ballpark.team}</h2>
        </div>
      </div>
      <div className="r">
        <div className="column-half">
          <p>{this.state.ballpark.description}</p>
        </div>
        <div className="column-half">
          <img src="http://sabrtoothedtigers.files.wordpress.com/2013/06/pnc-park-1280.jpg" className="image-holder"></img>
        </div>
      </div>

        <ReviewList onChange={this.getBallpark.bind(this)} ballparkId={this.props.params.ballparkId} />

    </div>
   );
 }
}

export default Ballpark;
