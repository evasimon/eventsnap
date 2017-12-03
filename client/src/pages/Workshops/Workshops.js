import React, { Component } from 'react'
import { Container, Segment, Button, Menu, Image, Icon, Header, List } from 'semantic-ui-react'
import './Workshops.css'
import API from "../../utils/API";


class Workshops extends Component {

    state = {
        workshops: []
    }
    componentDidMount() {
        this.loadWorkshops()
    }

    loadWorkshops = () => {
        API.getWorkshops()
            .then(workshops => {
                console.log(workshops)
                this.setState({
                    workshops: workshops.data
                })
            })
            .catch(err => console.log(err));
    }

    render() {

        return (
            <div>
                <Container fluid>
                    <Segment inverted padded='very'>
                        {this.state.workshops.length ? (
                            <List divided inverted relaxed>
                                {this.state.workshops.map(workshop => (
                                    <List.Item key={workshop.id}>
                                        <List.Content>
                                            <List.Header as='a' href={"/event/workshops/" + workshop.id} >
                                            {workshop.code}: {workshop.title}
                                            </List.Header>
                                            {/* Date & Time: */}
                                            Instructors: {workshop.Instructor.lastName}
                                        </List.Content>
                                    </List.Item>
                                ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}

                    </Segment>
                </Container>
            </div >
        )
    }
}

export default Workshops