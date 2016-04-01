import React from 'react';
import jQuery from 'jquery';
import model from "./Model";
import ScoreboardItem from "./ScoreboardItem";
import Loader from 'react-loader'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Scoreboard extends React.Component {
 constructor() {
   super();

   this.state = {
     loaded: false,
     games: []
   };
 }

 componentDidMount() {
   this.loadGames();
 }

 loadGames(event) {
   let component = this;

   function onDone(data) {
      console.log(data);

      component.setState({
        games: data.data.games.game,
        loaded: true,
      });
   }

   model.scores.index( onDone );
 }

 getScore(game, homeAway) {
   if (game.status.status == "Cancelled") {
     return "-"
   }
   else if (game.status.status == "Preview") {
     return "0"
   }
   else {
     if (homeAway == "Home") {
     return game.linescore.r.home
     }
     else {
       return game.linescore.r.away
     }
   }
 }

 getInning(game) {
   let topBottom = game.status.inning_state;
   let inning = game.status.inning;
   if (game.status.status == "In Progress") {
     return topBottom + " " + inning
   }
 }

 render() {
   return (
     <Loader loaded={this.state.loaded} color="#1a75ff">
     <ReactCSSTransitionGroup transitionName="moveRight" transitionAppear={true} transitionAppearTimeout={500} transitionLeave={true} transitionLeaveTimeout={500}>
     <div className="container">
      <div className="r scoreboard-main">
     {this.state.games.map(function(game, i) {
       console.log(game);
       console.log(game.linescore);
       return(
         <ScoreboardItem key={game.venue_id} id={game.venue_id} hometeam={game.home_team_name} homecity={game.home_team_city} awayteam={game.away_team_name} awaycity={game.away_team_city} homescore={this.getScore(game, "Home")} awayscore={this.getScore(game, "Away")} status={game.status.status} inning={this.getInning(game)} />

       );
     }, this)}
      </div>
    </div>

    </ReactCSSTransitionGroup>
    </Loader>

   );
  }
}

export default Scoreboard;
