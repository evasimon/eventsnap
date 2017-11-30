// * **Main** - contains the main-container div that holds the main layout and navigation. 
// This component should also be able to hold sub-components Search and Saved

import React, { Component } from "react";
import BadgeGeneration from "../BadgeGeneration";
import QRReader from "../QRReader"
import Nav from "../../components/Nav";
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
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={BadgeGeneration} />
                        <Route exact path="/qr-reader" component={QRReader} />
                        {/* <Route component={NoMatch} /> */}
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Main;