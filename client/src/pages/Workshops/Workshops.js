import React, {Component} from 'react'
import {Container, List} from 'semantic-ui-react'
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
                        )
}
                </Container>
            </div >
        )
    }
}

export default Workshops