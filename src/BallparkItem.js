import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';

class BallparkItem extends React.Component {
 constructor() {
   super();
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

       <li className="li-gr-item">
         <Link to={`/ballparks/${this.state.id}`}>{this.state.name}</Link> {this.state.average_rating}
       </li>
   );
 }
}

export default BallparkItem;
