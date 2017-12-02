import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Grid, Checkbox, Table } from 'semantic-ui-react'

export default class Attendees extends Component {
    state = {
        visible: false,
        activeItem: 'attendees'
    }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { visible } = this.state
        const { activeItem } = this.state
        return (
            <div>
                <Menu fluid widths={3}>
                    <Menu.Item
                        name='menu'
                        active={activeItem === 'menu'}
                        onClick={this.toggleVisibility}
                    >
                        <Icon name='sidebar' />
                        Menu
                    </Menu.Item>

                    <Menu.Item
                        id="logo"
                        as='a'
                        href="/"
                        name='logo'
                        active={activeItem === 'logo'}
                        onClick={this.handleMenuItemClick}
                    >
                        Event<span>Snap</span>
                    </Menu.Item>
                    <Menu.Item
                        name='scan'
                        active={activeItem === 'scan'}
                        onClick={this.handleMenuItemClick}
                    >
                        <Icon name='qrcode' />
                        Scan
                    </Menu.Item>
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
                        <Menu.Item as='a' href="/chicagotangofestival/checkin" name='check-in' active={activeItem === 'check-in'} onClick={this.handleMenuItemClick}>
                            <Icon name='checkmark' />
                            Check-In
                        </Menu.Item>

                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment inverted>
                            <Header as='h3'>Attendees Card / Workshops Card / Registration / Check-In</Header>
                            <Table compact celled definition>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell />
                                        <Table.HeaderCell>Name</Table.HeaderCell>
                                        <Table.HeaderCell>Registration Date</Table.HeaderCell>
                                        <Table.HeaderCell>E-mail address</Table.HeaderCell>
                                        <Table.HeaderCell>Premium Plan</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell collapsing>
                                            <Checkbox slider />
                                        </Table.Cell>
                                        <Table.Cell>John Lilki</Table.Cell>
                                        <Table.Cell>September 14, 2013</Table.Cell>
                                        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                                        <Table.Cell>No</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell collapsing>
                                            <Checkbox slider />
                                        </Table.Cell>
                                        <Table.Cell>Jamie Harington</Table.Cell>
                                        <Table.Cell>January 11, 2014</Table.Cell>
                                        <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                                        <Table.Cell>Yes</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell collapsing>
                                            <Checkbox slider />
                                        </Table.Cell>
                                        <Table.Cell>Jill Lewis</Table.Cell>
                                        <Table.Cell>May 11, 2014</Table.Cell>
                                        <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                                        <Table.Cell>Yes</Table.Cell>
                                    </Table.Row>
                                </Table.Body>

                                <Table.Footer fullWidth>
                                    <Table.Row>
                                        <Table.HeaderCell />
                                        <Table.HeaderCell colSpan='4'>
                                            <Button floated='right' icon labelPosition='left' primary size='small'>
                                                <Icon name='user' /> Add User
                                            </Button>
                                            <Button size='small'>Approve</Button>
                                            <Button disabled size='small'>Approve All</Button>
                                        </Table.HeaderCell>
                                    </Table.Row>
                                </Table.Footer>
                            </Table>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}