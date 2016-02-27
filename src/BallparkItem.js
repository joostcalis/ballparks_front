import React from 'react';
import jQuery from 'jquery';

class BallparkItem extends React.Component {
 constructor() {
   super();
 }

 componentDidMount() {
   this.setState({
     id: this.props.id,
     name: this.props.name,
     team: this.props.team,
     city: this.props.city,
     description: this.props.description,
     average_rating: this.props.average_rating
   });
 }





 render() {
   return(
     <ul>
     <li><strong>{this.state.name} ({this.state.average_rating})</strong></li>
     <li><em>Team:</em> {this.state.team}</li>
     <li><em>City:</em> {this.state.city}</li>
     <li><em>Info:</em> {this.state.description}</li>
     </ul>
   );
 }
}

export default BallparkItem;
