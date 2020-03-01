import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Container, Row, Col } from 'react-grid-system';
import Footer from './components/villages/neighborhoods/Footer.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Footer />
      </div>
    );
  }
}

export default App;
