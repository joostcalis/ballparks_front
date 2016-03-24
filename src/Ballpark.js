import React from 'react';
import jQuery from 'jquery';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
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
     loaded: false,
     rerender: false
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
       reviews: data.reviews,
       loaded: true
     });
   }

   model.ballparks.show(onDone, ballparkId);

 }

 displayReviews() {
   let component = this;
   let ballparkId = this.props.params.ballparkId;

   function onDone(data) {
      console.log("loading reviews attached to ballpark");

      component.setState({
         reviews: data.reviews
      });

   }

   model.ballparkReviews.index( onDone, ballparkId );
 }

 render() {
   if (this.state.ballpark.league === "nl_east" || this.state.ballpark.league === "nl_central" || this.state.ballpark.league === "nl_west") {
     var imageSource = "http://s18.postimg.org/5m0u366qh/nl_logo1.png";
   }
   else {
     var imageSource = "http://s10.postimg.org/v9uele0c9/american_leage.png";
   }
   return(


      <div>
      <Loader loaded={this.state.loaded} color="#1a75ff">
      <ReactCSSTransitionGroup transitionName="moveRight" transitionAppear={true} transitionAppearTimeout={500} transitionLeave={true} transitionLeaveTimeout={500}>
      <div className="container">
         <div className="r">
           <div className="c10">
           </div>
           <div className="c2">
           <img src={this.state.ballpark.team_logo} className="teamlogo" />
           </div>
         </div>
       </div>
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
            <img src={this.state.ballpark.image} className="image-holder"></img>
              <p className="justify"><strong>League:</strong> {this.state.ballpark.league}</p>
              <p className="justify"><strong>Team:</strong> {this.state.ballpark.team}</p>
              <p className="justify"><strong>Rating:</strong> {this.state.average_rating}</p>


              <p className="justify">{this.state.ballpark.description}</p>
            </div>
            <div className="c4 ballpark-reviewform-holder">
            <ReviewForm onChange={this.displayReviews.bind(this)} ballparkId={this.props.params.ballparkId} />
            </div>
          </div>
          </div>

          <div className="container-f">


          <ReviewList reviews={this.state.reviews} ballparkId={this.props.params.ballparkId} />

          </div>
          </ReactCSSTransitionGroup>
          </Loader>
      </div>


   );
 }
}

export default Ballpark;
