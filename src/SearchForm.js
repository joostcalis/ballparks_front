import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class SearchForm extends React.Component {
 constructor() {
   super();

   this.state = {
     mlb: []
   };
 }

 componentDidMount() {
   this.setState({
     mlb: this.props.mlb
   });
 }


 render() {
   return (
     <div>
      <h1>Searchform</h1>
     </div>

   );
  }
}

export default SearchForm;
