import React, { Component } from 'react'
import { List, ListItem, ListItemContent } from 'react-mdl';
import { Container, Row, Col } from 'react-bootstrap';
import stephanie from './img/stephanie.jpg'

function sendEmail() {
  var mail = 'mailto:stephanieraymos@gmail.com';
  var a = document.createElement('a');
  a.href = mail;
  a.click();
};

function foo(){
  window.open("mailto:xyz@abc.com");
}

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Container className="contact-grid">
          <Row>
            <Col>
              <h2>Stephanie Raymos</h2>
              <img
                src={stephanie}
                alt="avatar"
                style={{ height: '300px', width: '225px', objectFit: 'contain' }}
              />
              <p style={{ width: '70%', margin: 'auto', paddingTop: '1em' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
            <Col>
              <h2>Contact Me</h2>
              <hr />

              <div className="contact-list">
                <List>
                  <ListItem>
                    <ListItemContent 
                      style={{ fontSize: '30px', fontFamily: 'Oswald', justifyContent: 'center' }}>
                      <a class="mailto" style={{color: 'black'}} href="mailto:stephanieraymos@gmail.com"><i className="fa fa-envelope" aria-hidden="true" />
                    stephanieraymos@gmail.com</a>
                  </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Oswald', justifyContent: 'center' }}>
                      <i className="fa fa-skype" aria-hidden="true" />
                    stephanieraymos
                  </ListItemContent>
                  </ListItem>
                </List>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Contact;