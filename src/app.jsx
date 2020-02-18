import React, { Component } from 'react';
import Axios from 'axios';
import TopSpot from './topspot';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topspots: []
    };
  }

  componentWillMount() {
    Axios 
    .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    .then(response => response.data)
    .then(topspots => this.setState({ topspots }));
  }
  
  
  render(
    
  ) {
    return (
      <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">San Diego Top Spots</h1>
        <p className="lead">A list of the top 30 places to see in San Diego, California.</p>
      </div>
        {
          this.state.topspots.map(topspot => (
            <TopSpot
              key={topspot.id}
              name={topspot.name}
              description={topspot.description}
              href = {`https://maps.google.com/?q=${topspot.location[0]},${topspot.location[1]}`}
              />
          ))
        }  
      </div>
    );
  }
}

export default App;

        {/* <pre>
          { JSON.stringify(this.state.topspots, null, 2) }
        </pre> */}