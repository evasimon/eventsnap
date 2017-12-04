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
                    workshopCode: res.data.workshop.code,
                    workshopTitle: res.data.workshop.title,
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

                <Container fluid>
                    {/* <Segment inverted padded='very'> */}
                    <List divided inverted relaxed className='one-card'>
                        < List.Item className='card'>
                            <List.Content>
                                <List.Header as='h2'>{this.state.workshopCode}: {this.state.workshopTitle}</List.Header>
                                {/* Date */}
                                Instructors: {this.state.instuctorName}
                            </List.Content>
                        </List.Item>
                    </List>

                    {/* </Segment> */}
                    {/* <Segment inverted padded='very'> */}

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
                                <Icon name='checkmark'/> {this.state.listCheckLead.length + this.state.listCheckFollower.length}
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
                    <Grid divided='vertically'>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                <Header as="h3" inverted>Leads List</Header>
                                <Progress
                                    value={this.state.listCheckLead.length}
                                    total={this.state.totalLead}
                                    progress='ratio'
                                    inverted/>  
                                <List divided inverted relaxed>
                                    {this
                                        .state
                                        .listCheckLead
                                        .map(obj => <List.Item>
                                            {obj.firstName}
                                            {obj.firstName}
                                        </List.Item>)}
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                <Header as="h3" inverted textAlign='center'>Followers List</Header>
                                <Progress
                                    value={this.state.listCheckFollower.length}
                                    total={this.state.totalFollower}
                                    progress='ratio'
                                    inverted/>
                                <List divided inverted relaxed>
                                    {this
                                        .state
                                        .listCheckFollower
                                        .map(obj => <List.Item>
                                            {obj.firstName}
                                            {obj.firstName}
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