import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
              </ul>
            </nav>
            {this.props.children}
          </div>
    );
  }
}

export default App;
