import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import gambar from './../../../../../images/Branding.svg';

class Branding extends React.Component {
    render() {
        return (
            <div>
                <img className="branding" src={gambar} />
            </div>
        );
    }
}

export default Branding;