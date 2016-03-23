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
            <div className="c2 margin-ballpark">
              <h4><strong>{this.state.ballpark.name}</strong></h4>
            </div>
            <div className="c10">
            </div>
          </div>
          <div className="r">
            <div className="c7 ballpark-content">
            <img src="http://sabrtoothedtigers.files.wordpress.com/2013/06/pnc-park-1280.jpg" className="image-holder"></img>
              <p className="justify"><strong>League:</strong> {this.state.ballpark.league}</p>
              <p className="justify"><strong>Team:</strong> {this.state.ballpark.team}</p>
              <p className="justify"><strong>Rating:</strong> {this.state.average_rating}</p>

              <p className="justify">{this.state.ballpark.description}</p>
            </div>
            <div className="c5">
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
