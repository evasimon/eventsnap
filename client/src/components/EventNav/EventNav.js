import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Grid } from 'semantic-ui-react'
// import BadgeGeneration from "../../pages/BadgeGeneration"
import "./EventNav.css"


export default class EventNav extends Component {
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
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
