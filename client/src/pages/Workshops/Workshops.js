import React, {Component} from 'react'
import {Container, List, Header} from 'semantic-ui-react'
import API from "../../utils/API";

class Workshops extends Component {

    state = {
        workshops: []
    }
    componentDidMount() {
        this.loadWorkshops()
    }

    loadWorkshops = () => {
        API
            .getWorkshops()
            .then(workshops => {
                console.log(workshops)
                this.setState({workshops: workshops.data})
            })
            .catch(err => console.log(err));
    }

    render() {

        return (
            <div>
                <Container>
                    <Header as="h1" inverted>
                        Event Workshops
                    </Header>
                    {this.state.workshops.length
                        ? (
                            <List divided inverted relaxed className='one-card'>
                                {this
                                    .state
                                    .workshops
                                    .map(workshop => (
                                        <List.Item className='card' key={workshop.id}>
                                            <List.Content>
                                                <List.Header as="h2">
                                                    <a href={"/event/workshops/" + workshop.id}>
                                                        {workshop.code}: {workshop.title}
                                                    </a>
                                                </List.Header>
                                                <List.Description>
                                                    <List>
                                                        <List.Item
                                                            icon='users'
                                                            content={'Instructors: ' + workshop.Instructor.coupleName}/>
                                                        <List.Item icon='calendar times' content={workshop.day + " " + workshop.timeFrame}/>
                                                        <List.Item icon='law' content={'Max. Seats: ' + workshop.maxSeat}/>
                                                        <List.Item icon='fire' content={workshop.skillLevel}/>
                                                    </List>
                                                </List.Description>
                                            </List.Content>
                                        </List.Item>
                                    ))}

                            </List>
                        )
                        : (
                            <h3>No Results to Display</h3>
                        )
}
                </Container>
            </div >
        )
    }
}

export default Workshops