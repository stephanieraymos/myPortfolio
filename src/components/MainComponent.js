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
        <Route exact path = "/" component = {AboutComponent} />
        <Route exact path = "/" component = {ContactComponent} />
        <Route exact path = "/" component = {ProjectsComponent} />
        <Route exact path = "/" component = {ResumeComponent} />

    </Switch>
)

export default MainComponent;