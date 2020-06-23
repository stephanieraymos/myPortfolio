import React from 'react'
import { Switch, Route } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import AboutComponent from './AboutComponent';
import ContactComponent from './ContactComponent';
import ProjectsComponent from './ProjectsComponent';
import ResumeComponent from './ResumeComponent';

const MainComponent = () => (
    <Switch>
        <Route exact path = "/" component = {HomeComponent} />
        <Route path = "/about" component = {AboutComponent} />
        <Route path = "/contact" component = {ContactComponent} />
        <Route path = "/projects" component = {ProjectsComponent} />
        <Route path = "/resume" component = {ResumeComponent} />

    </Switch>
)

export default MainComponent;