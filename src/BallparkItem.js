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
     average_rating: this.props.average_rating
   });
 }

 render() {
   return(
      <Link className="ballparkLink" to={`/ballparks/${this.state.id}`}>
       <li className="li-gr-item">
         {this.state.name}<span className="ballpark-rating">({this.state.average_rating})</span>
       </li>
       </Link>
   );
 }
}

export default BallparkItem;
