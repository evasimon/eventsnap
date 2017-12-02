import React, { Component } from "react";
import SaveBtn from "../../components/SaveBtn";
import { Col, Row, Container } from "../Grid";
import Jumbotron from "../Jumbotron";
import QrReader from "react-qr-reader";
import API from "../../utils/API";
import { setTimeout } from "timers";
import { Dropdown, Grid, Segment, Button, Header, Icon, Modal } from 'semantic-ui-react'

const options = [
    { key: 1, text: 'One', value: 1 },
    { key: 2, text: 'Two', value: 2 },
    { key: 3, text: 'Three', value: 3 },
]

class QRReader extends Component {

    constructor(props) {
        super(props)
        this.state = {
            delay: 300,
            result: 'No result',
            checkedIn: false,
            value: 1,
            modalOpen: false
        }
        this.handleScan = this.handleScan.bind(this)
    }

    getInitialState = () => {
        return { value: 1 };
    }

    handleChange = (e, { value }) => this.setState({ value })


    handleScan(data) {
        console.log(this.state.value);
        if (data) {
            this.setState({
                result: data
            })

            setTimeout(function () {
                this.setState({
                    delay: 300,
                    checkedIn: false,
                    modalOpen: false
                })
            }.bind(this), 2000)

            if (!this.checkedIn) {
                this.handleCheckIn(data, this.state.value)
                console.log('data and value sent')
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
                    delay: false,
                    modalOpen: true
                })

            })
            .catch(err => console.log(err.respose));
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })


    render() {

        return (
            <div>
                <Container textAlign='center'>
                    <Row>
                        <Col size="md-12">
                            <Jumbotron>

                                <Grid columns={2}>
                                    <Grid.Column>
                                        <Dropdown
                                            onChange={this.handleChange}
                                            options={options}
                                            placeholder='Choose an option'
                                            selection
                                            value={this.state.value}
                                        />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Segment secondary>
                                            <pre>Current value: {this.state.value}</pre>
                                        </Segment>
                                    </Grid.Column>
                                </Grid>

                                <QrReader
                                    delay={this.state.delay}
                                    onError={this.handleError}
                                    onScan={this.handleScan}
                                    style={{
                                        width: '100%',
                                    }}
                                    className={'centerBox'}
                                />
                                <p>{this.state.result}</p>
                                {/* {this.state.checkedIn ? <Modal /> : null} */}

                                <Modal
                                    open={this.state.modalOpen}
                                    // onClose={this.handleClose}
                                    basic
                                    size='small'
                                >
                                    <Header icon='browser' content='Cookies policy' />
                                    <Modal.Content>
                                        <h3>You are checked In, Name. Have Fun!</h3>
                                    </Modal.Content>
                                    {/* <Modal.Actions>
                                        <Button color='green' onClick={this.handleClose} inverted>
                                            <Icon name='checkmark' /> Got it
                                            </Button>
                                    </Modal.Actions> */}
                                </Modal>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default QRReader;