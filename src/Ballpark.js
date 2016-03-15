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
     <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500}>
       <div className="container-f">
        <Loader loaded={this.state.loaded} color="#1a75ff">
        <div className="r ballpark-header">
          <div className="c4">
            <h2>{this.state.ballpark.league}</h2>
          </div>
          <div className="c4">
            <h1>{this.state.ballpark.name} ({this.state.average_rating})</h1>
          </div>
          <div className="c4">
            <h2>{this.state.ballpark.team}</h2>
          </div>
        </div>
        <div className="r">
          <div className="c6">
            <p>{this.state.ballpark.description}</p>
          </div>
          <div className="c6">
            <img src="http://sabrtoothedtigers.files.wordpress.com/2013/06/pnc-park-1280.jpg" className="image-holder"></img>
          </div>
        </div>
          <ReviewList onChange={this.getBallpark.bind(this)} ballparkId={this.props.params.ballparkId} />
          </Loader>
      </div>
    </ReactCSSTransitionGroup>
   );
 }
}

export default Ballpark;
