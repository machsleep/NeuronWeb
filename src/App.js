import React, {Component} from 'react';
import logo from './logo.svg';
import './styles/App.css';
import ScaledMenu from './menu/Menu'
import About from './sections/about/About'

class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="outer-container" style={{height: '100%'}}>
        <ScaledMenu/>
        <main id="page-wrap">
          <div className="header">
            <h1 className="title">Neuron</h1>
            <p>A secure, cost-effective, learning network based on Blockchain technology</p>
          </div>
          <About/>
        </main>
      </div>
    );
  }
}

export default App;
