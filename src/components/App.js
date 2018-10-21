import React from 'react';
// import Header from './Header';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

import sampleFishes from '../sample-fishes';

class App extends React.Component {
  state = {
    fishes: {
    },
    order: {
    }
  }
  
  addFish = fish => {
    // 1, take a copy of the existing state
    const fishes = {...this.state.fishes};
    // 2, add a new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    console.log('Adding a Fish', fish);
    // 3, set a new fishes object to object
    this.setState({ fishes });
  }

  loadSampleFishes = () => {
    alert('Loading Sample');
    this.setState({fishes: sampleFishes});
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" age={500} cool={true}/>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
      </div>
    );
  }
}

export default App;
