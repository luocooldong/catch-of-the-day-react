import React from 'react';
// import Header from './Header';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

import sampleFishes from '../sample-fishes';
import Fish from './Fish';

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
    this.setState({fishes: sampleFishes});
  }

  addToOrder = (key) => {
    console.log(key)
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({
      order: order
    })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" age={500} cool={true}/>
          <ul className="fishes">
            {
              Object.keys(this.state.fishes).map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)
            }
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
      </div>
    );
  }
}

export default App;
