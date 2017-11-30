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

    componentDidMount() {
        console.log('Scaning mounted')
        // handleScan(data)
    }

    componentWillUnmount() {
        console.log('Scaning will unmount')
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
                if (res.data.success) {
                    console.log(`${uuid} is checked in now to workshop ${id}`)
                    console.log('send me the data', res.data)
                    console.log(res.data.result.workshop.checkedIn)
                    this.setState({
                        checkInStatus: res.data.result.workshop.checkedIn
                    })
                    alert("checked in successfully");
                } else {
                    alert(res.data.error);
                }

            })
            .catch(err => console.log("err"));
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