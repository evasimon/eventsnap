import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'

export default class HomeNav extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu fluid widths={2}>
                <Menu.Item
                    id="logo"
                    name='logo'
                    active={activeItem === 'logo'}
                    onClick={this.handleMenuItemClick}
                >
                    Event<span>Snap</span>
                </Menu.Item>

                <Menu.Item
                    name='login'
                    active={activeItem === 'login'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='log in' />
                    Sign In
                    </Menu.Item>
            </Menu>
        )
    }
}
