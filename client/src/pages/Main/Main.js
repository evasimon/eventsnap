// * **Main** - contains the main-container div that holds the main layout and navigation. 

import React, { Component } from "react"
import EventNav from "../../components/EventNav"
import Home from "../../pages/Home"
import EventHome from "../../pages/EventHome"
import Attendees from "../../pages/Attendees"
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

                        {/* route for attendees
                        route for workshops */}
                        <Route exact path="/chicagotangofestival/registration" component={Registration} />
                        <Route exact path="/chicagotangofestival/checkin" component={CheckIn}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Main;