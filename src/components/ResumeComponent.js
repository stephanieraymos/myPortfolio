import React, { Component } from 'react'
import { } from 'react-mdl';
import { Container, Row, Col } from 'react-bootstrap';
import stephanie from './img/stephanie.jpg';
import Education from './EducationComponent';
import Experience from './ExperienceComponent';

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
                  style={{ height: '300px', paddingTop: '25px', marginBottom: '-75px' }}
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

              <Education
                startYear={2008}
                endYear={2010}
                schoolName="Victory Academy"
                schoolDescription="My highschool offered computer science as an elective. I took all 4 offered semesters"
              />

              <Education
                startYear={2020}
                endYear={2020}
                schoolName="NuCamp Coding Bootcamp"
                schoolDescription="This was a 27 week bootcamp covering bootstrap, javascript, jquery, React, React-Native, Node and MongoDB"
              />
              <hr style={{ borderTop: '3px solid #e22947' }} />

              <h2>Experience</h2>
              <Experience
                startYear={2013}
                endYear={2015}
                jobName="Napa Auto Parts"
                jobDescription="Thasdlkfjalskdjflk asdjflkj aflskdjflk ajsdflkjsdf"
              />
              <Experience
                startYear={2015}
                endYear={2016}
                jobName="Wells Fargo"
                jobDescription="Thasdlkfjalskdjflk asdjflkj aflskdjflk ajsdflkjsdf"
              />
              <Experience
                startYear={2017}
                endYear="Present"
                jobName="Mommin101"
                jobDescription="Thasdlkfjalskdjflk asdjflkj aflskdjflk ajsdflkjsdf"
              />
              <Experience
                startYear={2017}
                endYear={2020}
                jobName="Amazon associate"
                jobDescription="Thasdlkfjalskdjflk asdjflkj aflskdjflk ajsdflkjsdf"
              />
              <hr style={{ borderTop: '3px solid black', width: '50%' }} />
              <h2>Skills</h2>


            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Resume

