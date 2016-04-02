import jQuery from 'jquery';

 class Ballparks {
    constructor() {
    }

    index( onDone ) {
      jQuery.getJSON( "https://ballparks.herokuapp.com/ballparks", onDone );
    }

    index1( onDone ) {
      jQuery.getJSON( "http://m.mlb.com/gdcross/components/game/mlb/year_2016/month_03/day_29/master_scoreboard.json", onDone );
    }

    show( onDone, ballparkId ) {
      jQuery.getJSON( "https://ballparks.herokuapp.com/ballparks/" + ballparkId + ".json", onDone );
    }
 }

 class BallparkReviews {
    constructor() {
    }


    index( onDone, ballparkId ) {
      jQuery.getJSON( "https://ballparks.herokuapp.com/ballparks/" + ballparkId + ".json", onDone );
    }

    create( review, onDone, onFail, ballparkId )
    {
       let data = JSON.stringify({ review: review });

       console.log( "creating new review" );

       let request = {
          type: "POST",
          url: "https://ballparks.herokuapp.com/ballparks/" + ballparkId + "/reviews.json",
          data: data,
          contentType: "application/json",
          dataType: "json"
       };

       jQuery.ajax( request ).done( onDone ).fail( onFail );
    }
 }

 class News {
    constructor() {
    }

    index( onDone ) {
      jQuery.getJSON( "https://ballparks.herokuapp.com/feeds", onDone );
    }

 }

 class Scores {
    constructor() {
    }

    index( onDone ) {
      jQuery.getJSON( "http://m.mlb.com/gdcross/components/game/mlb/year_2016/month_04/day_02/master_scoreboard.json", onDone );
    }
 }



 class Model {
    constructor() {
       this.ballparks = new Ballparks;
       this.ballparkReviews = new BallparkReviews;
       this.news = new News;
       this.scores = new Scores;
    }
 }


 var model = new Model;

 export default model;
