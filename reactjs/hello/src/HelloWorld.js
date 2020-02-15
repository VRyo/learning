import React, { Component } from 'react';
import './App.css';

class HelloWorld extends Component {
	constructor(props){
		super(props);
		this.state = { 
			salam: 'Halo ',
			data: ''
		 };
	}

	salamkan = () => {
		this.setState({ salam: 'Salam Untukmu ' });
	}

	handleChange = (event) => {
	    this.setState({
	      data: event.target.value
	    })
	  }


	render(){
		return (
			<div className="warna">
				{this.state.salam} 
				{this.props.namaDepan} {this.props.namaBelakang}
				<br />
				<button onClick={this.salamkan}>Salam!</button>
				<br />
				<input type="text" onChange={this.handleChange}/>
		        <h3>{this.state.data}</h3>
			</div>
		);
	}
}

export default HelloWorld;