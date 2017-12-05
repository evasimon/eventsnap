import React, {Component} from 'react'
import {Container, Button, Header, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class Home extends Component {

    render() {
        return (
            <Container textAlign='right'>
                <Header as="h1" inverted>
                    Experience the Event
                </Header>
                <Image src='/img/placeit.png' size='medium' floated='left'/>
                <p>Real-time check-in data management for a better user experience. Lorem ipsum
                    dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                    Aenean massa strong.</p>
                <Button.Group>
                    <Button as={Link} to='/event/registration'>
                        Register
                    </Button>
                    <Button.Or/>
                    <Button positive as={Link} to='/event/checkin'>
                        Check-In
                    </Button>
                </Button.Group>
            </Container>
        )
    }
}

export default Home