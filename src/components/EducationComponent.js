import React, { Component } from 'react'
import { } from 'react-mdl';
import { Container, Row, Col } from 'react-bootstrap';

class Education extends Component {
  render() {
    return(
      <Container>
        <Row style={{paddingLeft:0, paddingRight:0}}>
          <Col xs={4}>
            <p>{this.props.startYear} - {this.props.endYear}</p>
          </Col>
          <Col xs={8} style={{}}>
            <h4 style={{marginTop: '0px'}}>{this.props.schoolName}</h4>
            <p>{this.props.schoolDescription}</p>
          </Col>
        </Row>
      </Container>
      )
  }
}


export default Education;