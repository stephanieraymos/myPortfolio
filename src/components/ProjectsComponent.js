import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

export class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  toggleCatergories() {

    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '250px', background: 'url("https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png") center / cover' }}></CardTitle>
            <CardText>
              <h4 style={{ textAlign: 'center', color: 'black', marginTop: 0 }}>React Project #1</h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardText>
            <CardActions border style={{ textAlign: 'center' }}>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '250px', background: 'url("https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png") center / cover' }}></CardTitle>
            <CardText>
              <h4 style={{ textAlign: 'center', color: 'black', marginTop: 0 }}>React Project #2</h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardText>
            <CardActions border style={{ textAlign: 'center' }}>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '250px', textAlign: 'center', background: 'url("https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png") center / cover' }}></CardTitle>
            <CardText>
              <h4 style={{ textAlign: 'center', color: 'black', marginTop: 0 }}>React Project #3</h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardText>
            <CardActions border style={{ textAlign: 'center' }}>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is React-Native</h1>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is MongoDB</h1>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="catergory-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple>
          <Tab>React</Tab>
          <Tab>React-Native</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">
              {this.toggleCatergories()}
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects