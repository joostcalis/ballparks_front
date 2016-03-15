import React from 'react';
import jQuery from 'jquery';
import BallparkItem from './BallparkItem';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Top10 extends React.Component {
 constructor() {
   super();

   this.state = {
     top10: []
   };
 }

 componentDidMount() {
   this.getTop10();
 }



 getTop10() {
   console.log("I live in getTop10");

   let top10 = this.props.mlb;
   top10.sort(function (a, b) {
    if (b.average_rating > a.average_rating) {
      return 1;
    }
    if (b.average_rating < a.average_rating) {
      return -1;
    }
    return 0;
  });

  top10 = top10.slice(0, 10);
  console.log(top10);

  this.setState({
   top10: top10
  });
 }

 render() {
   return (
     <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500}>

       <div className="r">
        <div className="c3">
        </div>
         <div className="c6">
           <h2>Top 10</h2>
             <div className="li-gr">
               {this.state.top10.map(function(ballpark, i) {
                 return(
                   <BallparkItem key={ballpark.id} id={ballpark.id} name={ballpark.name} team={ballpark.team} city={ballpark.city} description={ballpark.description} average_rating={ballpark.average_rating} />
                 );
               }, this)}
             </div>
         </div>
         <div className="c3">
         </div>
       </div>
     </ReactCSSTransitionGroup>
   );
 }
}


export default Top10;
