import React, { Component } from 'react'
import { } from 'react-mdl';
import { Container, Row, Col } from 'react-bootstrap';
import stephanie from './img/stephanie.jpg'

export class Resume extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className= "resume-left" col={4}>
              <div style={{textAlign: 'center'}}>
                <img
                  src={stephanie}
                  alt="avatar"
                  style={{height: '200px'}}
                />
              </div>

              <h2 style={{paddingTop: '2em'}}>Stephanie Raymos</h2>
              <h4 style={{color: 'grey'}}>Programmer</h4>
            </Col>
            <Col className= "resume-right" col={8}>Right Side</Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Resume

