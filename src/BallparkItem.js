import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';

class BallparkItem extends React.Component {
 constructor() {
   super();

   this.state = {
     id: null,
     name: "",
     average_rating: 0
   };
 }

 componentDidMount() {
   this.setState({
     id: this.props.id,
     name: this.props.name,
     average_rating: this.props.average_rating,
     logo: this.props.logo,
     league: this.props.league
   });
   console.log(this.props.league);
 }

 render() {
   if (this.props.league === "nl_east" || this.props.league === "nl_central" || this.props.league === "nl_west") {
     var idName = "nl";
   }
   else {
     var idName = "";
   }
   return(
      <Link className="ballparkLink" to={`/ballparks/${this.state.id}`}>
       <li className="li-gr-item" id={idName}>
         {this.state.name}<span className="ballpark-rating">({this.state.average_rating})</span>
       </li>
       </Link>
   );
 }
}

export default BallparkItem;
