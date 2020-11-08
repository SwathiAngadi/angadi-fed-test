import React, { Component } from 'react';
import InfoCards from './InfoCards';

class Home extends Component {     
  render() {    
    return (
      <div className="pileOfCards">
          <InfoCards />
          <InfoCards />
          <InfoCards />
          <InfoCards />
          <InfoCards />
      </div>
    );
  }  
}

export default Home;