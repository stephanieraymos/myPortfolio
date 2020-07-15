import React, { Component } from 'react'
import { } from 'react-mdl';
import { Container, Row, Col } from 'react-bootstrap';

class Experience extends Component {
  render() {
    return(
      <Container>
        <Row>
          <Col xs={4}>
            <p>{this.props.startYear} - {this.props.endYear}</p>
          </Col>
          <Col>
            <h4 style={{marginTop: '0px'}}>{this.props.jobName}</h4>
            <p>{this.props.jobDescription}</p>
          </Col>
        </Row>
      </Container>
      )
  }
}


export default Experience;