import React from 'react';
import jQuery from 'jquery';
import BallparkItem from './BallparkItem';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Bottom10 extends React.Component {
 constructor() {
   super();

   this.state = {
     bottom10: []
   };
 }

 componentDidMount() {
   this.getBottom10();
 }



 getBottom10() {
   console.log("I live in getBottom10");

   let bottom10 = this.props.mlb;
   bottom10.sort(function (a, b) {
    if (a.average_rating > b.average_rating) {
      return 1;
    }
    if (a.average_rating < b.average_rating) {
      return -1;
    }
    return 0;
  });

  bottom10 = bottom10.slice(0, 10);
  console.log(bottom10);

  this.setState({
   bottom10: bottom10
  });
 }

 render() {
   return (
     <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500}>

       <div className="r">
        <div className="c3">
        </div>
         <div className="c6">
           <h2>Bottom 10</h2>
               {this.state.bottom10.map(function(ballpark, i) {
                 return(
                   <BallparkItem key={ballpark.id} id={ballpark.id} name={ballpark.name} team={ballpark.team} city={ballpark.city} description={ballpark.description} average_rating={ballpark.average_rating} />
                 );
               }, this)}
         </div>
         <div className="c3">
         </div>
       </div>

     </ReactCSSTransitionGroup>
   );
 }
}


export default Bottom10;
