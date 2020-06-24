import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export class Home extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="home-grid">
          <Cell col={12}>
            <img
              src="https://cdn5.vectorstock.com/i/1000x1000/72/74/female-avatar-profile-icon-round-woman-face-vector-18307274.jpg"
              alt="Avatar"
              className="avatar"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
            </div>
          </Cell>

        </Grid>
      </div>
    )
  }
}

export default Home