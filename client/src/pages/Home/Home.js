import React, { Component } from 'react'
import { Grid, Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import HomeNav from "../../components/HomeNav"

class Home extends Component {
    state = {
        // visible: false,
        activeItem: 'home'
    }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    handleMenuItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { visible } = this.state
        const { activeItem } = this.state

        return (
            <div>
                <HomeNav/>
                <Grid container columns={2}>
                    <Grid.Column>
                        <a href='/chicagotangofestival'>
                            <Image
                                src='/img/square-image.png'
                                centered
                                size='medium'
                                disabled
                            />
                            {/* <Icon name='plus' size='massive'/> */}
                        </a>
                    </Grid.Column>
                    <Grid.Column>
                        <a href='/chicagotangofestival'>
                            <Image
                                src='/img/square-image.png'
                                centered
                                size='medium'
                            />
                        </a>
                    </Grid.Column>
                </Grid>
            </div >
        )
    }
}

export default Home