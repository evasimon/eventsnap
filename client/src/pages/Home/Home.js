import React, { Component } from 'react'
import { Grid, Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'


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
                <Menu fluid>
                    <Menu.Item
                        id="logo"
                        name='reviews'
                        active={activeItem === 'reviews'}
                        onClick={this.handleMenuItemClick}
                    >
                        Event<span>Snap</span>
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        {/* <Menu.Item
                        name='login'
                        active={activeItem === 'login'}
                        onClick={this.handleItemClick} /> */}
                        <Menu.Item
                            name='upcomingEvents'
                            active={activeItem === 'upcomingEvents'}
                            onClick={this.handleMenuItemClick}
                        >
                            <Image src='/assets/images/wireframe/square-image.png' avatar />
                            <span>Username</span>
                            <Icon name='log out' />
                            Log Out
        </Menu.Item>
                    </Menu.Menu>

                </Menu>
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
            </div>
        )
    }
}

export default Home