import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import QrReader from "react-qr-reader";
import API from "../../utils/API";


class QRReader extends Component {

    constructor(props) {
        super(props)
        this.state = {
            delay: 300,
            result: 'No result',
            checkInStatus: 0
        }
        this.handleScan = this.handleScan.bind(this)
    }

    handleScan(data) {
        console.log(data)
        if (data) {
            this.setState({
                result: data,
            })
            this.handleCheckIn(data, 2)
        }
    }

    handleError(err) {
        console.error(err)
    }

    handleCheckIn = (uuid, id) => {
        API.checkIn(uuid, id)
            .then(res => {
                console.log(`${uuid} is checked in now to workshop ${id}`)
                console.log('send me the data', res.data)
                console.log(res.data.workshopAttending.checkedIn)
                this.setState({
                    checkInStatus: res.data.workshopAttending.checkedIn
                })
            })
            .catch(err => console.log(err));
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
                            <p>{this.state.checkInStatus}</p>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default QRReader;