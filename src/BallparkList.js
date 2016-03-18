import React from 'react';
import jQuery from 'jquery';
import BallparkItem from './BallparkItem';
import Loader from 'react-loader'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class BallparkList extends React.Component {
 constructor() {
   super();

   this.state = {
     al_west: [],
     al_central: [],
     al_east: [],
     nl_west: [],
     nl_central: [],
     nl_east: []
   };
 }

 componentDidMount() {
   this.setState ({
     al_west: this.props.al_west,
     al_central: this.props.al_central,
     al_east: this.props.al_east,
     nl_west: this.props.nl_west,
     nl_central: this.props.nl_central,
     nl_east: this.props.nl_east
   })
 }

 render() {
   return (
     
     <div className="container-f">
      <div className="r">
      <div className="c1">
      </div>
      <div className="r">
      <ReactCSSTransitionGroup transitionName="moveRight" transitionAppear={true} transitionAppearTimeout={500} transitionLeave={true} transitionLeaveTimeout={500}>
        <div className="c4">
            <div className="r ballpark-list-card">

              <div className="c12">
                <img className="league-logo" src="http://s10.postimg.org/v9uele0c9/american_leage.png" />
              </div>
              <div className="c12 al">
              <h2> West </h2>
                <div className="li-gr">
              {this.state.al_west.map(function(ballpark, i) {
                return(
                  <BallparkItem key={ballpark.id} id={ballpark.id} name={ballpark.name} team={ballpark.team} city={ballpark.city} description={ballpark.description} average_rating={ballpark.average_rating} />
                );
              }, this)}
                </div>
              </div>

              <div className="c12 al">
              <h2> Central </h2>
                <div className="li-gr">
              {this.state.al_central.map(function(ballpark, i) {
                return(
                  <BallparkItem key={ballpark.id} id={ballpark.id} name={ballpark.name} team={ballpark.team} city={ballpark.city} description={ballpark.description} average_rating={ballpark.average_rating} />
                );
              }, this)}
                </div>
              </div>


              <div className="c12 al">
              <h2> East </h2>
                <div className="li-gr">
              {this.state.al_east.map(function(ballpark, i) {
                return(
                  <BallparkItem key={ballpark.id} id={ballpark.id} name={ballpark.name} team={ballpark.team} city={ballpark.city} description={ballpark.description} average_rating={ballpark.average_rating} />
                );
              }, this)}
                </div>
              </div>

          </div>
        </div>
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup transitionName="moveLeft" transitionAppear={true} transitionAppearTimeout={500} transitionLeave={true} transitionLeaveTimeout={500}>
          <div className="c4 offset-2">
            <div className="r">
              <div className="c12">
              <img className="league-logo" src="http://s18.postimg.org/5m0u366qh/nl_logo1.png" />
              </div>
              <div className="c12 nl">
              <h2> West </h2>
                <div className="li-gr">
              {this.state.nl_west.map(function(ballpark, i) {
                return(
                  <BallparkItem key={ballpark.id} id={ballpark.id} name={ballpark.name} team={ballpark.team} city={ballpark.city} description={ballpark.description} average_rating={ballpark.average_rating} classId= "nl" />
                );
              }, this)}
                </div>
              </div>


              <div className="c12 nl">
              <h2> Central </h2>
                <div className="li-gr">
              {this.state.nl_central.map(function(ballpark, i) {
                return(
                  <BallparkItem key={ballpark.id} id={ballpark.id} name={ballpark.name} team={ballpark.team} city={ballpark.city} description={ballpark.description} average_rating={ballpark.average_rating} classId= "nl" />
                );
              }, this)}
                </div>
              </div>
              <div className="c12 nl">
              <h2> East </h2>
                <div className="li-gr">
              {this.state.nl_east.map(function(ballpark, i) {
                return(
                  <BallparkItem key={ballpark.id} id={ballpark.id} name={ballpark.name} team={ballpark.team} city={ballpark.city} description={ballpark.description} average_rating={ballpark.average_rating} classId= "nl" />
                );
              }, this)}
                </div>
              </div>
            </div>
          </div>
          </ReactCSSTransitionGroup>
        </div>
        <div className="c1">
        </div>
      </div>
    </div>

    );
  }
}

export default BallparkList;
