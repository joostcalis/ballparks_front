import React from 'react';
import Top10 from './Top10';
import Bottom10 from './Bottom10';

class SortableList extends React.Component {
 constructor() {
   super();

   this.state = {
     mlb: [],
     showTop10: false,
     showLast10: false,
     showBottom10: false
   };
 }

 componentDidMount() {
   this.setState({
     mlb: this.props.mlb
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
     list = "Last 10"
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
          <div className="c6 sortable-active">
            <div className="container-f">
              <div className="r">
                <div className={"c4 sortable-choice-" + (top10Class) + " cursor"} onClick={this.showingTop10.bind(this)}>
                  Top 10 Rated
                </div>
                <div className={"c4 sortable-choice-" + (bottom10Class) + " cursor middle"} onClick={this.showingBottom10.bind(this)}>
                  Bottom 10 Rated
                </div>
                <div className={"c4 sortable-choice-" + (last10Class) + " cursor"} onClick={this.showingLast10.bind(this)}>
                  Last Rated
                </div>
              </div>
            </div>
          </div>
          <div className="c3">
          </div>
        </div>
      </div>
      <div className="container-f">
        <div className="r">
          <div className="c12">
            {list}
          </div>
        </div>
      </div>
    </div>
   );
  }
}

export default SortableList;