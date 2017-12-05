import React, {Component} from 'react'
import {Container, Button, Header, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class Home extends Component {

    render() {
        return (
            <Container textAlign='right'>
                <Header as="h1" inverted>
                    Experience Your Way In
                </Header>
                <Image src='/img/placeit.png' size='medium' floated='left'/>
                <p>
                    Easier and faster to greet event participants. Simple guest registration.
                    Customized QR-code check-in experience and data management in Real-Time.
                </p>
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

export default Home;