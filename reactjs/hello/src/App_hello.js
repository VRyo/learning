import React, { Component} from 'react';
import HelloWorld from './HelloWorld';

class App extends Component {
  render(){
    return(
      <div>
        <div className="warna1">Halo Semuanya! Saya Fajrul Aslim</div>
        <HelloWorld namaDepan="Dilan" namaBelakang="Ramadhan"/>
        <HelloWorld namaDepan="Milea" namaBelakang="Adnan"/>
        <HelloWorld namaDepan="Chandra" namaBelakang="Melinda"/>
      </div>
    );
  }
}

export default App;
