import React from 'react';
import jQuery from 'jquery';

class Welcome extends React.Component {

  constructor(){
    super();
    this.state = {
      hiddenContent: true
    };
  }

  componentDidMount() {
    this.initiate();
  }

  initiate() {
    console.log("i live in initiate")
    setTimeout(this.showContent.bind(this), 3000);

  }

  showContent() {
    console.log("i live in showContent");
    this.setState({
      hiddenContent: false
    });
  }



  render() {
    if (this.state.hiddenContent) {
      var class1 = "hidden";
    }
    else {
      var class1 = "fadein";
    }
    return (
      <div className="welcome cursor" onClick={this.props.continue}>
        <div className="welcome1">
          <h1 > If you build it, they will come...</h1>
        </div>
        <div className={"welcome1-" + (class1)}>
        <h1>Welcome to Ballparks</h1>
        <h3> click anywhere to continue</h3>
        </div>
      </div>
    );
  }
}

export default Welcome;
