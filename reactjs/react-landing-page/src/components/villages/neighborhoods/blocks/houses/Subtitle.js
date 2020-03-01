import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

class Subtitle extends React.Component {
    render() {
        return (
            <div>
                <h3 className="subtitle">One article to one random person in your Slack group. Once a day.</h3>
            </div>
        );
    }
}

export default Subtitle;