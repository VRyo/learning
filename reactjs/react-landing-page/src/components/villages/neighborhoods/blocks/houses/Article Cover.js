import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import gambar from './../../../../../images/Article Cover.svg';

class ArticleCover extends React.Component {
    render() {
        return (
            <Col lg={6}>
                <img className="article-cover" src={gambar} />
            </Col>
        );
    } z
}

export default ArticleCover;