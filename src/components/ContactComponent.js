import React, { Component } from 'react'
import { List, ListItem, ListItemContent } from 'react-mdl';
import { Container, Row, Col } from 'react-bootstrap';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Container className="contact-grid">
          <Row>
            <Col>
              <h2>Stephanie Raymos</h2>
              <img
                src="https://lh3.googleusercontent.com/proxy/QkmSzq51pwj6A6UsYKXQClOctohtdiaKTYIH2s-KIGAnKnMY_t2-TCN5AJ2bAWyrvAqyjn26qwnCP0K0p9Fgvan4TY9Tm3-OAUaVS4Gyc0kv6g9_zmbYIVGg8w0uLLfiVjjVEEU_ohh5QpBlU4sUPatdXl0Z9otlF4l5nSrBW-ksPRROu_suLA"
                alt="avatar"
                style={{ height: '250px' }}
              />
              <p style={{ width: '70%', margin: 'auto', paddingTop: '1em' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
            <Col>
              <h2>Contact Me</h2>
              <hr />

              <div className="contact-list">
                <List>
                  <ListItem>
                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Oswald', justifyContent: 'center'}}>
                      <i className="fa fa-envelope" aria-hidden="true" />
                    stephanieraymos@gmail.com
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