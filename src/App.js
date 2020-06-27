import React, { Component } from 'react'
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import MainComponent from './components/MainComponent';
import { Link } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Stephanie Raymos" scroll>
            <Navigation>
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/resume">Resume</Link>
            </Navigation>
          </Header>
          <Drawer title="Stephanie Raymos">
            <Navigation>
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/resume">Resume</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <MainComponent />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App
