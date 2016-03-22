import React from 'react';
import jQuery from 'jquery';
import ReviewList from './ReviewList';
import model from "./Model";
import Loader from "react-loader";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Ballpark extends React.Component {
 constructor() {
   super();
   this.state = {
     ballpark: {},
     average_rating: "",
     reviews: [],
     loaded: false
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
       average_rating: data.average_rating,
       loaded: true
     });
   }

   model.ballparks.show(onDone, ballparkId);

 }

 render() {
   return(
      <ReactCSSTransitionGroup transitionName="fade" transitionAppear={true} transitionAppearTimeout={500} transitionLeave={true} transitionLeaveTimeout={500}>

      <div>
      <Loader loaded={this.state.loaded} color="#1a75ff">

       <div className="container ballpark-card">

          <div className="r">
            <div className="c12 margin-ballpark">
              <h1>Welcome to {this.state.ballpark.name}</h1>
            </div>
          </div>
          <div className="r">
            <div className="c6 ballpark-content">
            <img src="http://sabrtoothedtigers.files.wordpress.com/2013/06/pnc-park-1280.jpg" className="image-holder"></img>
              <p className="justify"><strong>League: {this.state.ballpark.league}</strong></p>
              <p className="justify"><strong>Team: {this.state.ballpark.team}</strong></p>
              <p className="justify"><strong>Rating: {this.state.average_rating}</strong></p>

              <p className="justify"><strong>{this.state.ballpark.description}</strong></p>
            </div>
            <div className="c6">
            </div>
          </div>
          </div>

          <div className="container-f">


          <ReviewList onChange={this.getBallpark.bind(this)} ballparkId={this.props.params.ballparkId} />

          </div>
          </Loader>
      </div>

    </ReactCSSTransitionGroup>
   );
 }
}

export default Ballpark;
