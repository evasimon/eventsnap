// * **Main** - contains the main-container div that holds the main layout and
// navigation.

import React, {Component} from "react"
import {
    Sidebar,
    Segment,
    Button,
    Menu,
    Image,
    Icon,
    Header,
    Grid
} from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from "../../pages/Home"
import Attendees from "../../pages/Attendees"
import Workshops from "../../pages/Workshops"
import WorkshopDetails from "../../pages/WorkshopDetails"
import Registration from "../../pages/Registration"
import CheckIn from "../../pages/CheckIn"
import "./Main.css";

class Main extends Component {
    state = {
        visible: false
    }

    toggleVisibility = () => this.setState({
        visible: !this.state.visible
    })

    render() {
        const {visible} = this.state
        return (
            <Router>
                <div>
                    <Menu fluid widths={3}>
                        <Menu.Item name='menu' onClick={this.toggleVisibility}>
                            <Icon name='sidebar'/>
                            Menu
                        </Menu.Item>
                        <Menu.Item id="logo" as={Link} to='/' name='logo'>
                            Event<span>Snap</span>
                        </Menu.Item>
                        <Menu.Item as={Link} to='/event/checkin' name='scan'>
                            <Icon name='qrcode'/>
                            Check-In
                        </Menu.Item>
                    </Menu>
                    <Sidebar.Pushable as={Segment}>
                        <Sidebar
                            as={Menu}
                            animation='push'
                            width='thin'
                            visible={visible}
                            icon='labeled'
                            vertical
                            inverted>
                            <Menu.Item as={Link} to='/' name='home'>
                                <Icon name='home'/>
                                Home
                            </Menu.Item>
                            <Menu.Item as={Link} to='/event/attendees' name='attendees'>
                                <Icon name='users'/>
                                Attendees
                            </Menu.Item>
                            <Menu.Item as={Link} to='/event/workshops' name='workshops'>
                                <Icon name='qrcode'/>
                                Workshops
                            </Menu.Item>
                            <Menu.Item as={Link} to='/event/registration' name='registration'>
                                <Icon name='pencil'/>
                                Registration
                            </Menu.Item>
                            <Menu.Item as={Link} to='/event/checkin' name='check-in'>
                                <Icon name='checkmark'/>
                                Check-In
                            </Menu.Item>
                        </Sidebar>
                        <Sidebar.Pusher>
                            <Segment basic>
                                <Switch>
                                    <Route exact path="/" component={Home}/>
                                    <Route exact path="/event/attendees" component={Attendees}/>
                                    <Route exact path="/event/workshops" component={Workshops}/>
                                    <Route path="/event/workshops/:id" component={WorkshopDetails}/>
                                    <Route exact path="/event/registration" component={Registration}/>
                                    <Route exact path="/event/checkin" component={CheckIn}/>
                                </Switch>
                            </Segment>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </div>
            </Router >
        )
    }
}

export default Main;