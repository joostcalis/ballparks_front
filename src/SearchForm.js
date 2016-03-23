import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SearchInput from 'react-search-input';
import BallparkItem from './BallparkItem';

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

 searchUpdated(term) {
   console.log("i live in searchupdated");
    this.setState({searchTerm: term});
  }




 render() {
   let mlb = this.props.mlb;
   if (this.refs.search) {
      var filters = ['name', 'team', 'city'];
      mlb = mlb.filter(this.refs.search.filter(filters));
      console.log(mlb);
    }
   return (

     <div className="container-f">
      <div className="r">
        <div className="c3">
        </div>
        <ReactCSSTransitionGroup transitionName="moveRight" transitionAppear={true} transitionAppearTimeout={500} transitionLeave={true} transitionLeaveTimeout={500}>
        <div className="c6 search-form-card">
        <div className="r">

        <div className="c12">
     <SearchInput className="search-input" ref='search' placeholder='enter name, city or team' onChange={this.searchUpdated.bind(this)} />
        </div>
        </div>
        <div className="r">
         <div className="c3">
         </div>
          <div className="c6">
     {mlb.map(function(ballpark, i) {
       return(
         <BallparkItem key={ballpark.id} id={ballpark.id} name={ballpark.name} team={ballpark.team} city={ballpark.city} description={ballpark.description} average_rating={ballpark.average_rating} logo={ballpark.team_logo} />
       );
     }, this)}
      </div>
      <div className="c3">
      </div>
      </div>
      </div>
      </ReactCSSTransitionGroup>
      </div>
      </div>

    );
  }
}

export default SearchForm;
