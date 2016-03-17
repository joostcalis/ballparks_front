import React from 'react';
import jQuery from 'jquery';
import model from "./Model";
import Loader from 'react-loader'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import BallparkList from './BallparkList';
import SortableList from './SortableList';
import SearchForm from './SearchForm';
import News from './News';

class Dashboard extends React.Component {
 constructor() {
   super();

   this.state = {
     showAll: true,
     showSortable: false,
     showSearch: false,
     loaded: false,
     al_west: [],
     al_central: [],
     al_east: [],
     nl_west: [],
     nl_central: [],
     nl_east: [],
     mlb: []
   };
 }

 componentDidMount() {
   this.loadBallparks();
 }

 loadBallparks(event) {
   let component = this;

   function onDone(data) {
      console.log("loaded ballparks succesfully");

      component.setState({
        al_west: data.al_west,
        al_central: data.al_central,
        al_east: data.al_east,
        nl_west: data.nl_west,
        nl_central: data.nl_central,
        nl_east: data.nl_east,
      });
      component.completeList();
   }

   model.ballparks.index( onDone );
 }

 completeList(){
   let component = this;
   let al_west = this.state.al_west;
   let al_central = this.state.al_central;
   let al_east = this.state.al_east;
   let nl_west = this.state.nl_west;
   let nl_central = this.state.nl_central;
   let nl_east = this.state.nl_east;
   let mlb = al_west.concat(al_central, al_east, nl_west, nl_central, nl_east);
   console.log(mlb);

   component.setState({
     mlb: mlb,
     loaded: true
   });
 }

 showingAll(){
   this.setState({
    showAll: true,
    showSortable: false,
    showSearch: false
   });
 }

 showingSortable(){
   this.setState({
    showSortable: true,
    showAll: false,
    showSearch: false
   });
 }
 showingSearch(){
   this.setState({
    showSortable: false,
    showAll: false,
    showSearch: true
   });
 }

 render() {
   var show;
   if (this.state.showAll) {
     show = <BallparkList al_west={this.state.al_west} al_central={this.state.al_central} al_east={this.state.al_east} nl_west={this.state.nl_west} nl_central={this.state.nl_central} nl_east={this.state.nl_east} />
   }
   else if (this.state.showSortable) {
     show = <SortableList mlb={this.state.mlb}/>
   }
   else if (this.state.showSearch) {
     show = <SearchForm mlb={this.state.mlb}/>
   }
   else {
     show = ""
   }

   var class1;
   if (this.state.showAll) {
     class1 = "active"
   }
   else {
     class1 ="inactive"
   }

   var class2;
   if (this.state.showSortable) {
     class2 = "active"
   }
   else {
     class2 ="inactive"
   }
   var class3;
   if (this.state.showSearch) {
     class3 = "active"
   }
   else {
     class3 ="inactive"
   }


   return (

     <div>
     <Loader loaded={this.state.loaded} color="#1a75ff">
      <div className="container-f dashboard-margin">
        <div className="r dashboard-card">
          <div className="c4">

              <button className={"dashboard1-" + (class1) + " cursor"} onClick={this.showingAll.bind(this)}>All Ballparks</button>

          </div>

          <div className="c4" >

              <button className={"dashboard1-" + (class2) + " cursor"} onClick={this.showingSortable.bind(this)}>Sortable Lists</button>

          </div>
          <div className="c4">
          <button className={"dashboard1-" + (class3) + " cursor"} onClick={this.showingSearch.bind(this)}>Search a Ballpark</button>
          </div>
        </div>
      </div>
      <div>
        {show}
      </div>
      </Loader>
    </div>

   );
  }
}

export default Dashboard;
