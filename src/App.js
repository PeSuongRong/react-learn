import React, { Component } from 'react';
import Header from './components/Header';
import Product from './components/Product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className=" container">
          <div className="row">
            <Product />
            <Product />
            <Ifo />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
