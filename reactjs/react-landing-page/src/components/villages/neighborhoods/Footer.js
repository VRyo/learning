import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import Navigation from './../../../components/villages/neighborhoods/blocks/Navigation.js';

class Footer extends React.Component {
    render() {
        return (
            <section className="footer">
                <Container>
                    <Navigation />
                </Container>
            </section>
        );
    }
}

export default Footer;