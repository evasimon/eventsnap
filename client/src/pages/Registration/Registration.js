import React, {Component} from "react";
import QrReader from "react-qr-reader";
import API from "../../utils/API";
import {setTimeout} from "timers";
import {Container, Header, Grid, Modal, Button} from 'semantic-ui-react'
import '../Main/Main.css'

class Registration extends Component {

    constructor(props) {
        super(props)
        this.state = {
            delay: 500,
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
        if (data && !this.modalOpen) {
            this.handleRegistration(data)
        }
    }

    handleError(err) {
        console.error(err)
    }

    handleIAgreeBtn = () => {
        console.log("done")
        this.setState({modalOpen: false})
    }

    handleRegistration = (uuid) => {
        API
            .registration(uuid)
            .then(res => {
                if (res.data.success) {
                    console.log(`${uuid} is registered`)
                    this.setState({registered: true, msg: 'Success', iconName: 'checkmark', iconColor: 'green'})
                } else {
                    console.log(res.data.error);
                    this.setState({msg: res.data.error, iconName: 'x', iconColor: 'red'})
                }
                this.setState({modalOpen: true})

            })
            .catch(err => console.log(err.respose));
    }

    render() {

        return (
            <div>
                <Container>
                    <Header as="h2" inverted textAlign="center">Event Registration</Header>
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
                        <Modal.Content>
                            <Header as="h1" inverted textAlign="center">
                                <span id="logo">Event<span>Snap</span>
                                </span>
                            </Header>
                            <Header as="h2" inverted>
                                Waiver
                            </Header>
                            <p>
                                <strong>Waive Right to Video or Audio Recordings</strong>
                                I understand that my participation in the 2016 Chicago MINI Tango Festival may
                                be recorded on video tape, film and / or photographs, and I expressly agree to
                                and grant unlimited right and authority to use any recordings of my
                                participation in the aforementioned event in any media, in perpetuity, in
                                whatever manner and by whatever means, without obligation to me.Such recordings
                                are the sole property of the person(s)and / or organization(s)making them.</p>
                            <p>
                                <strong>Waive Right to Damages or Injuries</strong>
                                I understand the physical risks of participating in social dancing and assume
                                full responsibility for any injury or personal damages resulting from my
                                participation in any part of the 2016 Chicago MINI Tango Festival.I hereby, for
                                myself and my heirs, executors and administrators, waive and release any and all
                                rights for damages I might have against Chicago Milonguero, Ltd., sponsor of the
                                2016 Chicago MINI Tango Festival, its agents, for any and all injuries and / or
                                damages which may be suffered by me in participation at the 2016 Chicago MINI
                                Tango Festival and including traveling to and from the Chicago MINI Tango</p>
                            <p>
                                <strong>Waive Right to Refund</strong>
                                I understand that any unsportsmanlike conduct, inappropriate and / or violent
                                behavior or harassment of any member of the 2016 Chicago MINI Tango Festival
                                staff or volunteers, any of the other participants or attendees, or any staff of
                                the HILTON Rosemont on River Road will be cause for immediate ejection from the
                                premises, without refund of any fees.</p>
                            <Container textAlign='right'>
                                <Button.Group>
                                    <Button>
                                        Cancel
                                    </Button>
                                    <Button.Or/>
                                    <Button positive onClick={this.handleIAgreeBtn}>
                                        I Agree
                                    </Button>
                                </Button.Group>
                            </Container>
                        </Modal.Content>
                    </Modal>
                </Container>
            </div>
        )
    }
}

export default Registration;