import jQuery from 'jquery';

 class Ballparks {
    constructor() {
    }

    index( onDone ) {
      jQuery.getJSON( "https://ballparks.herokuapp.com/ballparks", onDone );
    }
 }



 class Model {
    constructor() {
       this.ballparks = new Ballparks;
    }
 }


 var model = new Model;

 export default model;
