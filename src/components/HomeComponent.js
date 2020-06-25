import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export class Home extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="home-grid">
          <Cell col={12}>
            <img
              src="https://lh3.googleusercontent.com/proxy/QkmSzq51pwj6A6UsYKXQClOctohtdiaKTYIH2s-KIGAnKnMY_t2-TCN5AJ2bAWyrvAqyjn26qwnCP0K0p9Fgvan4TY9Tm3-OAUaVS4Gyc0kv6g9_zmbYIVGg8w0uLLfiVjjVEEU_ohh5QpBlU4sUPatdXl0Z9otlF4l5nSrBW-ksPRROu_suLA"
              alt="Avatar"
              className="avatar"
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