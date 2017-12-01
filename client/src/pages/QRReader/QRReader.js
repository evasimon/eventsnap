import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Dropdown from "../../components/Dropdown"
import SaveBtn from "../../components/SaveBtn";
import { Col, Row, Container } from "../../components/Grid";
import QrReader from "react-qr-reader";
import API from "../../utils/API";
import { setTimeout } from "timers";


class QRReader extends Component {

    constructor(props) {
        super(props)
        this.state = {
            delay: 300,
            result: 'No result',
            checkedIn: false
        }
        this.handleScan = this.handleScan.bind(this)
    }

    handleScan(data) {
        if (data) {
            this.setState({
                result: data
            })

            setTimeout(function () {
                this.setState({
                    delay: 300,
                    checkedIn: false
                })
            }.bind(this), 2000)

            if (!this.checkedIn) {
                this.handleCheckIn(data, 2)
            }
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
                    // console.log(res.data.result.workshop.checkedIn)
                    console.log("checked in successfully");
                    this.setState({
                        checkedIn: true
                    })
                } else {
                    console.log(res.data.error);
                }
                this.setState({
                    delay: false
                })

            })
            .catch(err => console.log(err.respose));
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <Dropdown/>
                            <QrReader
                                delay={this.state.delay}
                                onError={this.handleError}
                                onScan={this.handleScan}
                                style={{ width: '40%' }}
                            />
                            <p>{this.state.result}</p>
                            {this.state.checkedIn ? <SaveBtn /> : null}
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default QRReader;