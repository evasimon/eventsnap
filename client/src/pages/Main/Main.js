// * **Main** - contains the main-container div that holds the main layout and navigation. 
// This component should also be able to hold sub-components Search and Saved

import React, { Component } from "react";
import BadgeGeneration from "../BadgeGeneration";
import QRReader from "../QRReader"
import MenuTop from "../../components/MenuTop";
import EventHome from "../../pages/EventHome";
import Home from "../Home";

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
                    {/* <Nav /> */}
                    {/* <MenuTop /> */}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/chicagotangofestival" component={EventHome} />
                        <Route exact path="/badge-generation" component={BadgeGeneration} />
                        <Route exact path="/qr-reader" component={QRReader} />
                        {/* <Route component={NoMatch} /> */}
                    </Switch>
                    {/* </Sidebar> */}
                </div>
            </Router>
        )
    }
}

export default Main;