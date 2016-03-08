import React from 'react';
import jQuery from 'jquery';
import BallparkItem from './BallparkItem';
import model from "./Model";
import Loader from 'react-loader'


class BallparkList extends React.Component {
 constructor() {
   super();

   this.state = {
     al_west: [],
     al_central: [],
     al_east: [],
     nl_west: [],
     nl_central: [],
     nl_east: [],
     loaded: false
   };
 }

  loadBallparks(event) {
    let component = this;

    function onDone(data) {
       console.log("loaded ballparks succesfully");

       component.setState({
         al_west: data.al_west,
         al_central: data.al_central,
         al_east: data.al_east,
         nl_west: data.nl_west,
         nl_central: data.nl_central,
         nl_east: data.nl_east,
         loaded: true
       });
    }

    model.ballparks.index( onDone );
  }

 componentDidMount() {
   this.loadBallparks();
 }

 render() {
   return (
     <div className="cont1">
      <Loader loaded={this.state.loaded} color="#1a75ff">
      <div className="r">
        <div className="column1">
          <h2> A.L West </h2>
            <div className="li-gr">
          {this.state.al_west.map(function(ballpark, i) {
            return(
              <BallparkItem key={ballpark.id} id={ballpark.id} name={ballpark.name} team={ballpark.team} city={ballpark.city} description={ballpark.description} average_rating={ballpark.average_rating} />
            );
          }, this)}
          </div>
        </div>
        <div className="column2">
          <h2> A.L Central </h2>
            <div className="li-gr">
          {this.state.al_central.map(function(ballpark, i) {
            return(
              <BallparkItem key={ballpark.id} id={ballpark.id} name={ballpark.name} team={ballpark.team} city={ballpark.city} description={ballpark.description} average_rating={ballpark.average_rating} />
            );
          }, this)}
          </div>
        </div>
        <div className="column3">
          <h2> A.L East </h2>
            <div className="li-gr">
          {this.state.al_east.map(function(ballpark, i) {
            return(
              <BallparkItem key={ballpark.id} id={ballpark.id} league={ballpark.league} name={ballpark.name} team={ballpark.team} city={ballpark.city} description={ballpark.description} average_rating={ballpark.average_rating} />
            );
          }, this)}
          </div>
        </div>
      </div>
      <div className="r">
        <div className="column1">
          <h2> N.L West </h2>
            <div className="li-gr">
          {this.state.nl_west.map(function(ballpark, i) {
            return(
              <BallparkItem key={ballpark.id} id={ballpark.id} league={ballpark.league} name={ballpark.name} team={ballpark.team} city={ballpark.city} description={ballpark.description} average_rating={ballpark.average_rating} />
            );
          }, this)}
            </div>
        </div>
        <div className="column2">
          <h2> N.L Central </h2>
            <div className="li-gr">
          {this.state.nl_central.map(function(ballpark, i) {
            return(
              <BallparkItem key={ballpark.id} id={ballpark.id} league={ballpark.league} name={ballpark.name} team={ballpark.team} city={ballpark.city} description={ballpark.description} average_rating={ballpark.average_rating} />
            );
          }, this)}
          </div>
        </div>
        <div className="column3">
          <h2> N.L East </h2>
            <div className="li-gr">
          {this.state.nl_east.map(function(ballpark, i) {
            return(
              <BallparkItem key={ballpark.id} id={ballpark.id} league={ballpark.league} name={ballpark.name} team={ballpark.team} city={ballpark.city} description={ballpark.description} average_rating={ballpark.average_rating} />
            );
          }, this)}
          </div>
        </div>
      </div>
      </Loader>
    </div>
    );
  }
}

export default BallparkList;
