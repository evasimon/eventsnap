import React, {Component} from "react";
// import {Col, Row, Container} from "../Grid";
import QrReader from "react-qr-reader";
import API from "../../utils/API";
import {setTimeout} from "timers";
import {
    Container,
    Header,
    Grid,
    Icon,
    Modal
} from 'semantic-ui-react'
import '../Main/Main.css'
// import openSocket from 'socket.io-client';

// const socket = openSocket();

class Registration extends Component {

    constructor(props) {
        super(props)
        this.state = {
            delay: 300,
            modalOpen: false,
            msg: '',
            iconName: '',
            iconColor: 'grey'
        }
        this.handleScan = this
            .handleScan
            .bind(this)
    }

    handleScan(data) {
        if (data) {

            setTimeout(function () {
                this.setState({delay: 300, modalOpen: false})
            }.bind(this), 5000)

            if (!this.modalOpen) {
                this.handleRegistration(data)

            }
        }
    }

    handleError(err) {
        console.error(err)
    }

    handleRegistration = (uuid) => {
        API
            .registration(uuid)
            .then(res => {
                if (res.data.success) {
                    console.log(`${uuid} is registered`)
                    console.log("checked in successfully", res.data)
                    this.setState({registered: true, msg: 'Success', iconName: 'checkmark', iconColor: 'green'})
                    // socket.emit('checkIn', id);
                } else {
                    console.log(res.data.error);
                    this.setState({msg: res.data.error, iconName: 'x', iconColor: 'red'})
                }
                this.setState({delay: false, modalOpen: true})

            })
            .catch(err => console.log(err.respose));
    }

    render() {

        return (
            <div>
                <Container>
                    <Header as="h2" inverted textAlign="center">Please Scan QR Code</Header>
                    <Grid>
                        <Grid.Column>
                            <QrReader
                                delay={this.state.delay}
                                onError={this.handleError}
                                onScan={this.handleScan}
                                style={{
                                width: '100%'
                            }}
                                className={'centerBox'}/>
                        </Grid.Column>
                    </Grid>

                    <Modal open={this.state.modalOpen} basic size='small'>
                        <Modal.Content className={'center-text'}>
                            <Icon name={this.state.iconName} size={'massive'} color={this.state.iconColor}/>
                            <p>{this.state.msg}</p>
                        </Modal.Content>
                    </Modal>

                </Container>
            </div>
        )
    }
}

export default Registration;