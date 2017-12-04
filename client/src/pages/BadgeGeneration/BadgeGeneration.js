import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";


class BadgeGeneration extends Component {
    state = {
        attendees: []
    }

    componentDidMount() {
        this.loadAttendees();
    }

    loadAttendees = () => {
        API.getAttendees()
            .then(res => {
                console.log(res)
                this.setState({
                    attendees: res.data
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h2>Badges</h2>

                            {this.state.attendees.length ? (
                                <List>
                                    {this.state.attendees.map(attendee => (
                                        <ListItem key={attendee.id}>
                                            <a href="">
                                                <strong>
                                                    {attendee.firstName} {attendee.lastName}
                                                </strong>
                                                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${attendee.uuid}`} alt="this is a unique QR code" />
                                            </a>
                                            {/* <DeleteBtn onClick={() => this.deleteArticle(attendee._id)} /> */}
                                        </ListItem>
                                    ))}
                                </List>
                            ) : (
                                    <h3>No Results to Display</h3>
                                )}
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default BadgeGeneration;