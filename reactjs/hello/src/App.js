import React, { Component} from 'react';

class App extends Component{
  constructor(){
    super();
    this.state = { homestays: [] }
  }

  componentDidMount(){
    fetch("https://raw.githubusercontent.com/algosigma/js-reactjs/master/homestays.json")
    .then(response => response.json())
    .then((data) => {
      this.setState({ homestays: data});
    })
  }

  render(){
    return(
      <div>
        {
          this.state.homestays.map((dinamis, key) =>
            <div>
             <p>{dinamis.nama} - Rp. {dinamis.harga} rb</p>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
