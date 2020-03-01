import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

class Paragraph extends React.Component {
    render() {
        return (
            <div>
                <h2 className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vo 10 lutpat, elit pulvinar aliquam convallis, libero mauris rhoncus erat, non porttit 11 or lectus justo et ex. In hac habitasse platea dictumst.
                </h2>
            </div>
        );
    }
}

export default Paragraph;