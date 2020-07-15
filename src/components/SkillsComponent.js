import React, { Component } from 'react'
import { ProgressBar } from 'react-mdl';
import { Container, Row, Col } from 'react-bootstrap';

class Skills extends Component {
  render() {
    return(
      <Container>
        <Row>
          <Col xs={12}>
            <div style={{display: 'flex', textAlign: 'center'}}>{this.props.skill} <ProgressBar style={{marginLeft: 'auto', width: '75%'}} progress={this.props.progress} /></div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Skills;

