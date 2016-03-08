import React from 'react';
import { Link } from 'react-router';

class Navbar extends React.Component {
  constructor(){
    super();
    this.state = {
      counter: 1


    }
  }

  componentDidMount(){
    this.slider1();
  }

  slider1() {
    console.log("i live in slider");
    this.setState({
      counter: 1
    });
    setTimeout(this.slider2.bind(this), 10000);
  }
  slider2() {
    console.log("i live in slider2");
    this.setState({
      counter: 2
    });
    setTimeout(this.slider3.bind(this), 10000);
  }
  slider3() {
    console.log("i live in slider3");
    this.setState({
      counter: 3
    });
    setTimeout(this.slider1.bind(this), 10000);
  }



  render() {
    var style1;
    if (this.state.counter === 1) {
      style1 = {};
    }
    else {
      style1 = {display: "none"};
    }

    var style2;
    if (this.state.counter === 2) {
      style2 = {};
    }
    else {
      style2 = {display: "none"};
    }

    var style3;

    if (this.state.counter === 3) {
      style3 = {};
    }
    else {
      style3 = {display: "none"};
    }




    return (

      <nav className="nav">
        <div className="cont">
          <div className="nav-header">
            <a className="nav-brand" href="#">Ballparks</a>
          </div>
          <ul className="nav1">
            <li className="act"><Link to="/">Home</Link></li>
            <li className = "navbar-feed" style={style1}>
              <a href="www.honkbalsite.com">I am news 1</a>
            </li>
            <li className = "navbar-feed" style={style2}>
              <a href="www.honkbalsite.com">I am news 2</a>
            </li>
            <li className = "navbar-feed" style={style3}>
              <a href="www.honkbalsite.com">I am news 3</a>
            </li>
          </ul>

        </div>
      </nav>


    );
  }
}

  export default Navbar;
