import React, {Component} from "react";
import {Container, List, Image, Header} from 'semantic-ui-react'
import API from "../../utils/API";

class BadgeGeneration extends Component {
    state = {
        attendees: []
    }

    componentDidMount() {
        this.loadAttendees();
    }

    loadAttendees = () => {
        API
            .getAttendees()
            .then(res => {
                console.log(res)
                this.setState({attendees: res.data})
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <Header as="h2" inverted>
                    Print Event Badges (CTRL + P)
                </Header>
                {this.state.attendees.length
                    ? (
                        <List divided inverted relaxed className='one-card'>
                            {this
                                .state
                                .attendees
                                .map(attendee => (
                                    <List.Item key={attendee.id} className='badge-card'>
                                        <List.Content>
                                            <Image
                                                className="qrImage"
                                                src=
                                                {'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + attendee.uuid}
                                                size='small'
                                                alt="this is a unique QR code"/>
                                            <List.Header as='h2'>
                                                {attendee.firstName + " " + attendee.lastName}
                                            </List.Header>
                                            <List.Description>
                                                <List>
                                                    <List.Item content={attendee.city + ", " + attendee.state}/>
                                                    <List.Item content='Full Festival Pass'/>
                                                </List>
                                            </List.Description>
                                        </List.Content>
                                    </List.Item>
                                ))}
                        </List>
                    )
                    : (
                        <h3>No Results to Display</h3>
                    )}
            </Container>
        )
    }
}

export default BadgeGeneration;