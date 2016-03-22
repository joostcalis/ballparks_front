import React from 'react';
import Top10 from './Top10';
import Bottom10 from './Bottom10';
import Latest10 from './Latest10';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class SortableList extends React.Component {
 constructor() {
   super();

   this.state = {
     latest10: [],
     mlb: [],
     showTop10: false,
     showLast10: false,
     showBottom10: false
   };
 }

 componentDidMount() {
   this.setState({
     mlb: this.props.mlb,
     latest10: this.props.latest10
   });
 }

 showingTop10(){
   this.setState({
    showTop10: true,
    showBottom10: false,
    showLast10: false
  });
}

  showingBottom10(){
    this.setState({
     showTop10: false,
     showBottom10: true,
     showLast10: false
   });
 }

  showingLast10(){
    this.setState({
     showTop10: false,
     showBottom10: false,
     showLast10: true
   });
 }

 render() {
   var list;
   if (this.state.showTop10) {
     list = <Top10 mlb={this.state.mlb} />
   }
   else if (this.state.showBottom10) {
     list = <Bottom10 mlb={this.state.mlb} />
   }
   else if (this.state.showLast10) {
     list = <Latest10 latest10={this.state.latest10} />
   }
   else {
     list = ""
   }

   if (this.state.showTop10) {
     var top10Class = "active"
   }
   else {
     var top10Class ="inactive"
   }

   if (this.state.showBottom10) {
     var bottom10Class = "active"
   }
   else {
     var bottom10Class ="inactive"
   }

   if (this.state.showLast10) {
     var last10Class = "active"
   }
   else {
     var last10Class ="inactive"
   }
   return (

     <div>
      <div className="container-f">
        <div className="r">
          <div className="c3">
          </div>
          <ReactCSSTransitionGroup transitionName="moveRight" transitionAppear={true} transitionAppearTimeout={500} transitionLeave={true} transitionLeaveTimeout={500}>
          <div className="c6 sortable-card">
            <div className="container-f">
              <div className="r">
                <div className="c4">
                  <button className="sortable-button" onClick={this.showingTop10.bind(this)} >Top 10 Rated
                  </button>
                </div>
                <div className="c4">
                  <button className="sortable-button" onClick={this.showingBottom10.bind(this)} >Bottom 10 Rated
                  </button>
                </div>
                <div className="c4">
                  <button className="sortable-button" onClick={this.showingLast10.bind(this)} >Latest 10 Rated
                  </button>
                </div>
              </div>
                <div className="r">
                  <div className="c12">
                    {list}
                  </div>
                </div>
            </div>
          </div>
          </ReactCSSTransitionGroup>
          <div className="c3">
          </div>
        </div>
      </div>

    </div>
   );
  }
}

export default SortableList;
