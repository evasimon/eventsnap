import React, {Component} from 'react'
import {Container, List, Header} from 'semantic-ui-react'
import API from "../../utils/API";

export default class Attendees extends Component {
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

    attendeeRender() {
        return this
            .state
            .attendees
            .map(attendee => (
                <List.Item className='card' key={attendee.id}>
                    <List.Icon
                        name='checkmark'
                        size='big'
                        verticalAlign='middle'
                        color={attendee.registered
                        ? "teal"
                        : "grey"}/>
                    <List.Content>
                        <List.Header as='h2'>
                            {attendee.firstName + " " + attendee.lastName}
                        </List.Header>
                        <List.Description>
                            <List>
                                <List.Item
                                    icon='user'
                                    content={(attendee.dancerType === "F")
                                    ? "Follower"
                                    : "Lead"}/>
                                <List.Item icon='marker' content={attendee.city + ", " + attendee.state}/>
                                <List.Item icon='mail' content={attendee.email}/>
                                <List.Item icon='qrcode' content='Full Festival Pass'/>
                            </List>
                        </List.Description>
                    </List.Content>
                </List.Item>
            ))
    }

    render() {

        return (
            <Container>
                <Header as="h2" inverted>
                    Event Attendees
                </Header>
                {this.state.attendees.length
                    ? (
                        <List divided inverted relaxed className='one-card'>
                            {this.attendeeRender()}
                        </List>
                    )
                    : (
                        <h3>No Results to Display</h3>
                    )}
            </Container>
        )
    }
}