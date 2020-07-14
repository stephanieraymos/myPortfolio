import React, { Component } from 'react'
import { } from 'react-mdl';
import { Container, Row, Col } from 'react-bootstrap';
import stephanie from './img/stephanie.jpg';
import Education from './EducationComponent';

export class Resume extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className="resume-left" col={4}>
              <div style={{ textAlign: 'center' }}>
                <img
                  src={stephanie}
                  alt="avatar"
                  style={{ height: '200px' }}
                />
              </div>

              <h2 style={{ paddingTop: '2em' }}>Stephanie Raymos</h2>
              <h4 style={{ color: 'grey' }}>Programmer</h4>
              <hr style={{ borderTop: '3px solid black', width: '50%' }} />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <hr style={{ borderTop: '3px solid black', width: '50%' }} />
              <h5>Address</h5>
              <p>1582 Response Rd Sacramento, CA 95815</p>
              <h5>Phone</h5>
              <p>(208) 965-0520</p>
              <h5>Email</h5>
              <a class="mailto" style={{ color: 'black' }} href="mailto:stephanieraymos@gmail.com"><i className="fa fa-envelope" aria-hidden="true" />
                    stephanieraymos@gmail.com</a>
              <hr style={{ borderTop: '3px solid black', width: '50%' }} />

            </Col>
            <Col className="resume-right" col={8}>
              <h2>Education</h2>

              
              <Education />

            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Resume

