import React, {Component} from 'react'
import {
    Container,
    List,
    Icon
} from 'semantic-ui-react'
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

    render() {

        return (
            <Container>
                {this.state.attendees.length
                    ? (
                        <List divided inverted relaxed className='one-card'>
                            {this
                                .state
                                .attendees
                                .map(attendee => (
                                    <List.Item>
                                        <List.Icon name='check mark' size='large' verticalAlign='middle' color={'grey'}/>
                                        <List.Content>
                                            <List.Header as='h2'>
                                                {attendee.firstName}
                                                {attendee.lastName}
                                            </List.Header>
                                            <List.Description>
                                                <List>
                                                    <List.Item icon='users' content='Dancer Type'/>
                                                    <List.Item icon='marker' content='New York, NY'/>
                                                    <List.Item
                                                        icon='mail'
                                                        content=
                                                        {<a href='mailto:jack@semantic-ui.com'> jack@semantic - ui.com </a>}/>
                                                    <List.Item
                                                        icon='linkify'
                                                        content=
                                                        {<a href='http://www.semantic-ui.com'> semantic-ui.com </a>}/>
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