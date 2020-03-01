import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Beranda extends Component {
	render(){
		return (
			<div style={{width: '100%', margin: 'auto'}}>
			    <Grid className="beranda-grid">
			        <Cell col={12}>
			        	<img src={require('./../photo.jpg')} alt="avatar" className="avatar-img" />

			        	<div className="banner-text">
			        		<h1>Full Stack Developer</h1>
			        		<hr />
			        		<p>HTML | CSS | Javascript | Bootstrap | PHP | Codeigniter | Laravel | ReactJs | p5Js | MySQL | MongoDB | Flutter</p>
			        		<div className="social-links">
			        			<a href="https://instagram.com/fajrulaslim" rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram" /></a>
			        			<a href="https://github.com/fajrulaslim" rel="noopener noreferrer" target="_blank"><i className="fa fa-github-square" /></a>
			        			<a href="https://youtube.com/fajrulaslim" rel="noopener noreferrer" target="_blank"><i className="fa fa-youtube-square" /></a>
			        		</div>
			        	</div>
			        </Cell>
			    </Grid>
			</div>
		)
	}
}

export default Beranda;