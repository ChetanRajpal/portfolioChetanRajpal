import React from "react";
import Landing from "./landingpage";
import AboutMe from "./aboutme";
import Resume from "./resume";
import Contact from "./contact";
import Projects from "./projects";
import {Switch, Route} from "react-router-dom";

const Main = () => (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/about' component={AboutMe}/>
        <Route exact path='/resume' component={Resume}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/projects' component={Projects}/>
    </Switch>
)

export default Main;