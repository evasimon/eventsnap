import React, { Component } from 'react'
import { Container, Segment, Grid, Image, Icon, Header, List, Progress, Statistic } from 'semantic-ui-react'
import './WorkshopDetails.css'

class WorkshopDetails extends Component {

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
                        <Progress value='3' total='5' progress='ratio' inverted />
                        {/* Leads */}
                        {/* </Progress> */}

                        <List divided inverted relaxed>
                            <List.Item>
                                <List.Content>
                                    <List.Header>Workshop Title2</List.Header>
                                    Date
                                    Instructor

                                </List.Content>
                            </List.Item>
                        </List>
                    </Segment>
                    <Segment inverted padded='very'>

                        <Statistic.Group widths='four' inverted>
                            <Statistic>
                                <Statistic.Value>22</Statistic.Value>
                                <Statistic.Label>Saves</Statistic.Label>
                            </Statistic>

                            <Statistic>
                                <Statistic.Value text>
                                    Three
        <br />Thousand
      </Statistic.Value>
                                <Statistic.Label>Signups</Statistic.Label>
                            </Statistic>

                            <Statistic>
                                <Statistic.Value>
                                    <Icon name='plane' />
                                    5
      </Statistic.Value>
                                <Statistic.Label>Flights</Statistic.Label>
                            </Statistic>

                            <Statistic>
                                <Statistic.Value>
                                    <Image src='/assets/images/avatar/small/joe.jpg' className='circular inline' />
                                    42
      </Statistic.Value>
                                <Statistic.Label>Team Members</Statistic.Label>
                            </Statistic>
                        </Statistic.Group>
                    </Segment>

                    <Grid divided='vertically'>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                Followers
                            </Grid.Column>
                            <Grid.Column>
                                Leads
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div >
        )
    }
}

export default WorkshopDetails