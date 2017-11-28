import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import QrReader from "react-qr-reader";

class QRReader extends Component {

    constructor(props) {
        super(props)
        this.state = {
            delay: 300,
            result: 'No result',
        }
        this.handleScan = this.handleScan.bind(this)
    }

    handleScan(data) {
        if (data) {
            this.setState({
                result: data,
            })
        }
    }

    handleError(err) {
        console.error(err)
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <QrReader
                                delay={this.state.delay}
                                onError={this.handleError}
                                onScan={this.handleScan}
                                style={{ width: '40%' }}
                            />
                            <p>{this.state.result}</p>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default QRReader;