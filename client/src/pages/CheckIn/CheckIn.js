import React, {Component} from "react";
import QrReader from "react-qr-reader";
import API from "../../utils/API";
import {setTimeout} from "timers";
import {
    Container,
    Dropdown,
    Grid,
    Segment,
    Icon,
    Modal,
    Header
} from 'semantic-ui-react'
import '../Main/Main.css'
import openSocket from 'socket.io-client';

const socket = openSocket();

class CheckIn extends Component {

    constructor(props) {
        super(props)
        this.state = {
            delay: 500,
            modalOpen: false,
            workshops: [],
            options: [],
            selectedWS: {},
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
            // restarts scan after 3s
            setTimeout(function () {
                this.setState({delay: 500, modalOpen: false})
            }.bind(this), 3000)

            // handles check-in if Modal not open
            if (!this.modalOpen) {
                this.handleCheckIn(data, this.state.selectedWS.id)
            }
        }
    }

    handleError(err) {
        console.error(err)
    }

    handleCheckIn = (uuid, id) => {
        API
            .checkIn(uuid, id)
            .then(res => {
                if (res.data.success) {
                    console.log(`${uuid} is checked in now to workshop ${id}`)
                    console.log("checked in successfully", res.data)
                    this.setState({checkedIn: true, msg: 'Success', iconName: 'checkmark', iconColor: 'green'})
                    // sends workshopId to the server
                    socket.emit('checkIn', id);
                } else {
                    console.log(res.data.error);
                    this.setState({msg: res.data.error, iconName: 'x', iconColor: 'red'})
                }
                // stops scanning and opens modal
                this.setState({delay: false, modalOpen: true})

            })
            .catch(err => console.log(err.respose));
    }

    componentDidMount() {
        this.loadWorkshops();
    }

    // componentWillUnmount() {
    //     socket.disconnect();
    // }

    // loads workshop list under the dropdown when the check-in page is rendered
    loadWorkshops = () => {
        API
            .getWorkshops()
            .then(workshops => {
                this.setState({
                    workshops: workshops.data,
                    options: workshops.data.map(workshop => (
                        {
                            key: workshop.id,
                            text: workshop.code + ": " + workshop.title,
                            value: workshop.id
                        }))
                })
            })
            .catch(err => console.log(err.respose))
    }

    // gets the selected workshop's id/value
    handleChange = (e, {value}) => {
        for (var i = 0; i < this.state.workshops.length; i++) {
            if (this.state.workshops[i].id === value) {
                this.setState({selectedWS: this.state.workshops[i]})
            }
        }
    }

    render() {

        return (
            <div>
                <Container>
                    <Header as="h2" inverted textAlign="center">Check-In Now</Header>
                    <Grid>
                        <Grid.Column textAlign='center'>
                            <Dropdown
                                onChange={this.handleChange}
                                options={this.state.options}
                                placeholder='Choose a workshop'
                                selection
                                value={this.state.value}/>
                        </Grid.Column>
                    </Grid>
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
                    <Grid>
                        <Grid.Column>
                            <Segment secondary>
                                <pre>{this.state.selectedWS.title}</pre>
                            </Segment>
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

export default CheckIn;