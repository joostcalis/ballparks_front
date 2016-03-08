import React from 'react';
import jQuery from 'jquery';
import ReviewList from './ReviewList';
import model from "./Model";
import Loader from "react-loader"

class News extends React.Component {
 constructor() {
   super();
   this.state = {
     news: [],
     counter: 0,
     loaded: false
   };
 }

 componentDidMount() {
   this.getNews();
 }

 getNews(){
   let component = this;

   function onDone(data) {
      console.log("loaded news succesfully");

      component.setState({
        news: data.mlb_news,
        loaded: true
      });
    }

   model.news.index(onDone);
   this.slider(0)
 }

 slider(counter){
   console.log(counter);

   let newslist = this.state.news;
   let counter1 = Number(counter);

   if (counter1 === (newslist.length-1)){
     counter1 = 0
   }
   else {
   counter1 += 1
  }

   this.setState({
     counter: counter1
   });

   console.log(this.state.counter);

   setTimeout(this.slider.bind(this), 10000, counter1);

 }

 render() {
   var index = this.state.counter;
   var newsItem = this.state.news[index];
   if (this.state.loaded) {
     var newsItem1 = newsItem.title;
     var newsItemLink = newsItem.link;
   }
   else {
     var newsItem1 = "";
     var newsItemLink = "";
   }

   return(
     <li className = "navbar-feed">
       <a href={newsItemLink} target="_blank">
        <strong>MLB news:</strong> {newsItem1}
      </a>
     </li>

   );
 }
}

export default News;
