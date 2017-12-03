import React, { Component } from 'react'
import { Container, Segment, Button, Menu, Image, Icon, Header, List } from 'semantic-ui-react'
import './Workshops.css'

class Workshops extends Component {

    state = {
        visible: false,
        activeItem: 'attendees'
    }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    handleMenuItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { visible } = this.state
        const { activeItem } = this.state

        return (
            <div>
                <Container fluid>
                    <Segment inverted padded='very'>
                        <List divided inverted relaxed>
                            <List.Item>
                                <List.Content>
                                    <List.Header>Workshop Title</List.Header>
                                    Date
                                    Instructor
                            </List.Content>
                            </List.Item>
                        </List>
                    </Segment>
                </Container>
            </div >
        )
    }
}

export default Workshops