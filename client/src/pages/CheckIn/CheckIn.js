import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import QRReader from "../../components/QRReader"

class CheckIn extends Component {

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
                <Menu fluid widths={3}>
                    <Menu.Item
                        name='editorials'
                        active={activeItem === 'editorials'}
                        onClick={this.toggleVisibility}
                    >
                        <Icon name='sidebar' />
                        Menu
                    </Menu.Item>

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
                            <Icon name='qrcode' />
                            Scan
                    </Menu.Item>
                    </Menu.Menu>

                </Menu>

                <Sidebar.Pushable as={Segment}>
                    <Sidebar as={Menu} animation='scale down' width='thin' visible={visible} icon='labeled' vertical inverted>
                        <Menu.Item as='a' href='/chicagotangofestival' name='home' active={activeItem === 'home'} onClick={this.handleMenuItemClick}>
                            <Icon name='home' />
                            Home
                        </Menu.Item>
                        <Menu.Item name='attendees' active={activeItem === 'attendees'} onClick={this.handleMenuItemClick}>
                            <Icon name='users' />
                            Attendees
                        </Menu.Item>
                        <Menu.Item name='workshops' active={activeItem === 'workshops'} onClick={this.handleMenuItemClick}>
                            <Icon name='qrcode' />
                            Workshops
                        </Menu.Item>
                        <Menu.Item name='instuctors' active={activeItem === 'instuctors'} onClick={this.handleMenuItemClick}>
                            <Icon name='qrcode' />
                            Instuctors
                        </Menu.Item>
                        <Menu.Item as='a' href='/chicagotangofestival/registration' name='registration' active={activeItem === 'registration'} onClick={this.handleMenuItemClick}>
                            <Icon name='pencil' />
                            Registration
                        </Menu.Item>
                        <Menu.Item as='a' href='/chicagotangofestival/checkin' name='check-in' active={activeItem === 'check-in'} onClick={this.handleMenuItemClick}>
                            <Icon name='checkmark' />
                            Check-In
                        </Menu.Item>

                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment inverted>
                            <Header as='h3'>Application Content</Header>
                            <QRReader />
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}

export default CheckIn