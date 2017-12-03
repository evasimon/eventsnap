// * **Main** - contains the main-container div that holds the main layout and navigation. 

import React, { Component } from "react"
import EventNav from "../../components/EventNav"
import Home from "../../pages/Home"
import EventHome from "../../pages/EventHome"
import Attendees from "../../pages/Attendees"
import Workshops from "../../pages/Workshops"
import WorkshopDetails from "../../pages/WorkshopDetails"
import Registration from "../../pages/Registration"
import CheckIn from "../../pages/CheckIn"
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import "./Main.css";

class Main extends Component {

    render() {
        return (
            <Router>
                <div>
                    {/* <EventNav /> */}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/event" component={EventHome} />
                        <Route exact path="/event/attendees" component={Attendees} />
                        <Route exact path="/event/workshops" component={Workshops} />
                        <Route path="/event/workshops/:id" component={WorkshopDetails} />
                        <Route exact path="/event/registration" component={Registration} />
                        <Route exact path="/event/checkin" component={CheckIn} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Main;