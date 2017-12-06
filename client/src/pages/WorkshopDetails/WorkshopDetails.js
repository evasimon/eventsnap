import React, {Component} from 'react'
import {
    Container,
    Grid,
    Icon,
    Header,
    List,
    Progress,
    Statistic
} from 'semantic-ui-react'
import './WorkshopDetails.css'
import API from "../../utils/API";
import openSocket from 'socket.io-client';

class WorkshopDetails extends Component {

    state = {
        workshopId: 0,
        workshopCode: "",
        workshopTitle: "",
        instuctorName: "",
        workshopDay: "",
        workshopFrame: "",
        workshopSkillLevel: "",
        workshopMaxSeat: 0,
        totalLead: 0,
        totalFollower: 0,
        listCheckLead: [],
        listCheckFollower: []
    }

    componentDidMount = () => {
        const socket = openSocket();
        const id = this.props.match.params.id;
        this.getOneWorkshop(id)
        const self = this;
        socket.on('checkedIn', function (id) {
            // alert('Someone Checked In into workshop: ' + id);
            self.getOneWorkshop(id)
        });
    }

    getOneWorkshop = (id) => {
        API
            .getOneWorkshop(id)
            .then(res => {
                console.log(res.data)

                const totalLead = res
                    .data
                    .result
                    .filter(obj => obj.Attendee.dancerType === "L")
                    .length
                const totalFollower = res
                    .data
                    .result
                    .filter(obj => obj.Attendee.dancerType === "F")
                    .length

                const listCheckLead = res
                    .data
                    .result
                    .filter(obj => obj.Attendee.dancerType === "L" && obj.checkedIn)
                    .map(obj => obj.Attendee)

                const listCheckFollower = res
                    .data
                    .result
                    .filter(obj => obj.Attendee.dancerType === "F" && obj.checkedIn)
                    .map(obj => obj.Attendee)

                this.setState({
                    workshopId: res.data.workshop.id,
                    workshopCode: res.data.workshop.code,
                    workshopTitle: res.data.workshop.title,
                    workshopDay: res.data.workshop.day,
                    workshopTimeFrame: res.data.workshop.timeFrame,
                    workshopSkillLevel: res.data.workshop.skillLevel,
                    workshopMaxSeat: res.data.workshop.maxSeat,
                    instuctorName: res.data.workshop.Instructor.coupleName,
                    totalLead,
                    totalFollower,
                    listCheckLead,
                    listCheckFollower
                })
            })
            .catch(err => console.log(err.respose));
    }

    render() {

        return (
            <div>

                <Container>
                    <Header as="h2" inverted textAlign="center">Workshop Real-Time Check-In Data</Header>
                    <List divided inverted relaxed className='one-card'>
                        < List.Item className='card'>
                            <List.Content>
                                <List.Header as="h3">
                                    {this.state.workshopCode}: {this.state.workshopTitle}
                                </List.Header>
                                <List.Description>
                                    <List>
                                        <List.Item
                                            icon='calendar times'
                                            content={this.state.workshopDay + " " + this.state.workshopTimeFrame}/>
                                        <List.Item icon='users' content={'Instructors: ' + this.state.instuctorName}/>
                                        <List.Item icon='fire' content={this.state.workshopSkillLevel}/>
                                    </List>
                                </List.Description>
                            </List.Content>
                        </List.Item>
                    </List>

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
                                <Icon name='checkmark' color="teal"/> {this.state.listCheckLead.length + this.state.listCheckFollower.length}
                            </Statistic.Value>
                            <Statistic.Label>Check Ins</Statistic.Label>
                        </Statistic>

                        <Statistic>
                            <Statistic.Value>
                                {this.state.workshopMaxSeat}
                            </Statistic.Value>
                            <Statistic.Label>Capacity</Statistic.Label>
                        </Statistic>
                    </Statistic.Group>
                    <Grid divided='vertically'>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                <Header as="h3" inverted textAlign='center'>Leads List</Header>
                                <Progress
                                    value={this.state.listCheckLead.length}
                                    total={this.state.totalLead}
                                    progress='ratio'
                                    inverted
                                    color="brown"/>
                                <List divided inverted relaxed>
                                    {this
                                        .state
                                        .listCheckLead
                                        .map(obj => <List.Item>
                                            {obj.firstName + " " + obj.lastName}
                                        </List.Item>)}
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                <Header as="h3" inverted textAlign='center'>Followers List</Header>
                                <Progress
                                    value={this.state.listCheckFollower.length}
                                    total={this.state.totalFollower}
                                    progress='ratio'
                                    inverted
                                    color="violet"/>
                                <List divided inverted relaxed>
                                    {this
                                        .state
                                        .listCheckFollower
                                        .map(obj => <List.Item>
                                            {obj.firstName + " " + obj.lastName}
                                        </List.Item>)}
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