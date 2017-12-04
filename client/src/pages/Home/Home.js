import React, {Component} from 'react'
import {Container, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class Home extends Component {

    render() {
        return (
            <Container textAlign='right'>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                    ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                    pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet</p>
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