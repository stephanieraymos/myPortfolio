import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import stephanie from './img/stephanie.jpg'

export class Home extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="home-grid">
          <Cell col={12}>
            <img
              src={stephanie}
              alt="avatar"
              style={{ height: '300px', width: '225px', objectFit: 'contain' }}
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                HTML/CSS | Bootstrap | Javascript | React | React Native | NodeJS | MongoDB
              </p>
              <div className="social-links">
                {/* Linked in */}
                <a href="https://www.linkedin.com/in/stephanieraymos/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Github */}
                <a href="https://github.com/stephanieraymos" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/* Facebook */}
                <a href="https://www.facebook.com/stephanieraymos" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>

        </Grid>
      </div>
    )
  }
}

export default Home