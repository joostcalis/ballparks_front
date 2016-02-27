import React from 'react';
import jQuery from 'jquery';


class BallparkList extends React.Component {
 constructor() {
   super();

   this.state = {
     ballparks: []
   };
 }

 componentDidMount() {
   let component = this;

   jQuery.getJSON("https://ballparks.herokuapp.com/ballparks", function(data) {
     console.log("getting data");

     component.setState({
       ballparks: data.ballparks
     });
   });
 }

 render() {
   return (
    //  <ul>
      //  {this.state.ballparks.map(function(todo, i) {
      //    return(
      //      <TodoItem key={ballpark.id} id={ballpark.id} name={ballpark.name} team={ballpark.team} city={ballpark.city} description={ballpark.description} average_rating={ballpark.average_rating} />
      //    );
      //  })}
      <li>this will be  my ballparklist</li>
    //  </ul>
   );
 }
}

export default BallparkList;
