import React from 'react';
import jQuery from 'jquery';

class ScoreboardItem extends React.Component {
 constructor() {
   super();

   this.state = {
     id: null,
   };
 }

 componentDidMount() {
   this.setState({
     id: this.props.id,
     homescore: this.props.homescore,
     awayscore: this.props.awayscore,
     hometeam: this.props.hometeam,
     awayteam: this.props.awayteam,
     homecity: this.props.homecity,
     awaycity: this.props.awaycity,
     status: this.props.status,
     inning: this.props.inning

   });
 }

 render() {
   return(
       <div className="c3 scoreboard-item">
        <div className="r">
          <div className="c12">
            <p>{this.state.status} <span className="inning">{this.state.inning}</span></p>
          </div>
        </div>
        <div className="r">
          <div className="c7">
           <p>{this.state.hometeam}</p>
           <p>{this.state.awayteam}</p>
          </div>
          <div className="c5">
            <p>{this.state.homescore}</p>
            <p>{this.state.awayscore}</p>
          </div>
        </div>
       </div>

   );
 }
}

export default ScoreboardItem;
