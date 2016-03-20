import React from 'react';
import jQuery from 'jquery';
import BallparkItem from './BallparkItem';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Latest10 extends React.Component {
 constructor() {
   super();

   this.state = {
     latest10: []
   };
 }

 componentDidMount() {
   this.setState({
    latest10: this.props.latest10
   });
 }

 render() {
   return (
     <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500}>

       <div className="r">
        <div className="c3">
        </div>
         <div className="c6">
           <h2>Latest 10</h2>

               {this.state.latest10.map(function(review, i) {
                 return(
                   <BallparkItem key={review.id} id={review.id} name={review.ballpark.name} team={review.ballpark.team} city={review.ballpark.city} description={review.ballpark.description} average_rating={review.ballpark.average_rating} />
                 );
               }, this)}
             </div>
         </div>
         <div className="c3">
         </div>

     </ReactCSSTransitionGroup>
   );
 }
}


export default Latest10;
