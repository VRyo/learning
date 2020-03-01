import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

class DemoLink extends React.Component {
    render() {
        return (
            <div>
                <a href="#">
                    <span className="demo-link">Demo</span>
                </a>
            </div>
        );
    }
}

export default DemoLink;