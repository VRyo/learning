import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import Branding from './../../../../components/villages/neighborhoods/blocks/houses/Branding.js';
import DemoLink from './../../../../components/villages/neighborhoods/blocks/houses/Demo Link.js';

class Navigation extends React.Component {
    render() {
        return (
            <Row>
                <Col lg={6}>
                    <Branding />
                </Col>
                <Col lg={6}>
                    <DemoLink />
                </Col>
            </Row>
        );
    }
}

export default Navigation;