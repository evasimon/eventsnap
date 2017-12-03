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
                        <Route exact path="/chicagotangofestival" component={EventHome} />
                        <Route exact path="/chicagotangofestival/attendees" component={Attendees} />
                        <Route exact path="/chicagotangofestival/workshops" component={Workshops} />
                        <Route exact path="/chicagotangofestival/workshop-details" component={WorkshopDetails} />
                        <Route exact path="/chicagotangofestival/registration" component={Registration} />
                        <Route exact path="/chicagotangofestival/checkin" component={CheckIn} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Main;