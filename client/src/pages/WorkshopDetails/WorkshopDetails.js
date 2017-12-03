import React, { Component } from 'react'
import { Container, Segment, Grid, Image, Icon, Header, List, Progress, Statistic } from 'semantic-ui-react'
import './WorkshopDetails.css'
import API from "../../utils/API";
import openSocket from 'socket.io-client';


class WorkshopDetails extends Component {

    state = {
        workshopCode: "",
        workshopTitle: "",
        instuctorName: "",
        totalLead: 0,
        totalFollower: 0,
        listCheckLead: [],
        listCheckFollower: []
    }

    componentDidMount = () => {
        const socket = openSocket();
        this.getOneWorkshop(2)
        const self = this;
        socket.on('checkedIn', function (id) {
            // alert('Someone Checked In into workshop: ' + id);
            self.getOneWorkshop(id)
        });

        socket.on('checkin', function (title) {
            // console.log('article title saved: ' + title);
            alert('Article title saved: ' + title);
        });
        console.log('data and value sent')
    }

    getOneWorkshop = (id) => {
        API.getOneWorkshop(id)
            .then(res => {
                console.log(res.data)

                const totalLead = res.data.result.filter(obj => obj.Attendee.dancerType == "L").length
                const totalFollower = res.data.result.filter(obj => obj.Attendee.dancerType == "F").length

                const listCheckLead = res.data.result
                    .filter(obj => obj.Attendee.dancerType === "L" && obj.checkedIn)
                    .map(obj => obj.Attendee)

                const listCheckFollower = res.data.result
                    .filter(obj => obj.Attendee.dancerType === "F" && obj.checkedIn)
                    .map(obj => obj.Attendee)


                this.setState({
                    workshopCode: res.data.workshop.code,
                    workshopTitle: res.data.workshop.title,
                    instuctorName: res.data.workshop.Instructor.firstName,
                    totalLead,
                    totalFollower,
                    listCheckLead,
                    listCheckFollower
                })
            })
            .catch(err => console.log(err.respose));
    }

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
                                    <List.Header>{this.state.workshopCode}: {this.state.workshopTitle}</List.Header>
                                    {/* Date */}
                                    Instructors: {this.state.instuctorName}
                                </List.Content>
                            </List.Item>
                        </List>
                    </Segment>
                    <Segment inverted padded='very'>

                        <Statistic.Group widths='four' inverted>
                            <Statistic>
                                <Statistic.Value>{this.state.totalLead}</Statistic.Value>
                                <Statistic.Label>Total Leads</Statistic.Label>
                            </Statistic>
                            <Statistic>
                                <Statistic.Value>{this.state.totalFollower}</Statistic.Value>
                                <Statistic.Label>Total Followers</Statistic.Label>
                            </Statistic>

                            <Statistic>
                                <Statistic.Value>
                                    <Icon name='checkmark' />
                                    {this.state.listCheckLead.length + this.state.listCheckFollower.length}
                                </Statistic.Value>
                                <Statistic.Label>Check Ins</Statistic.Label>
                            </Statistic>

                            <Statistic>
                                <Statistic.Value>
                                    40
                            </Statistic.Value>
                                <Statistic.Label>Capacity</Statistic.Label>
                            </Statistic>
                        </Statistic.Group>
                    </Segment>

                    <Grid divided='vertically'>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                <Progress value={this.state.listCheckLead.length} total={this.state.totalLead} progress='ratio' inverted />
                                Leads
                                <List divided inverted relaxed>
                                    {this.state.listCheckLead.map(obj =>
                                        <List.Item>
                                            {obj.firstName} {obj.firstName}
                                        </List.Item>
                                    )}
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                <Progress value={this.state.listCheckFollower.length} total={this.state.totalFollower} progress='ratio' inverted />
                                Follower
                                <List divided inverted relaxed>
                                    {this.state.listCheckFollower.map(obj =>
                                        <List.Item>
                                            {obj.firstName} {obj.firstName}
                                        </List.Item>
                                    )}
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div >
        )
    }
}

export default WorkshopDetails