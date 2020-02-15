import React, { Component} from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      siswa: [
        {
          id: 1,
          nama: 'Perwira Abrianto'
        },
        {
          id: 2,
          nama: 'Beti Khuluqiyah'
        },
        {
          id: 3,
          nama: 'Untung Selamet'
        }
      ]
    }
  }

  render(){
    return(
        this.state.siswa.map((data, key) =>
          <div>
           <p>{data.id}. {data.nama}</p>
          </div>
        )
    );
  }
}

export default App;
