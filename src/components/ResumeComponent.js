import React, { Component } from 'react'
import { } from 'react-mdl';
import { Container, Row, Col } from 'react-bootstrap';
import stephanie from './img/stephanie.jpg';
import Education from './EducationComponent';
import Experience from './ExperienceComponent';
import Skills from './SkillsComponent';

export class Resume extends Component {
  render() {
    return (
      <div>
        <Container fluid="sm" style={{ paddingLeft: 20, paddingRight: 20 }}>
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
              <p>I eat, sleep and breathe Computer Science.</p>
              <p>If you're looking for someone who <strong>NEVER GIVES UP</strong>; you've landed exactly where you needed to.</p>
              <p>I have such an strong passion for programming. In my free time; you'll find me at my desk with a huge smile on my face. This is what I love to do. It's second nature to me; as easy as breathing.</p>
              <p>The issues and errors don't frustrate me because I know exactly where to look to find solutions. In fact; they're exciting to me, because once I've solved them; I've <strong>LEARNED</strong> something very valuable that will ultimately make me a much better coder.</p>
              <p>I am different in many ways, but I consider my most important attribute to be that I bring my positivity anywhere I go; spreading it to everyone I approach.</p>
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
                schoolName="NuCamp"
                schoolDescription="This was a full-stack 27 week program covering bootstrap, javascript, jquery, React, React-Native, Node and MongoDB. I graduated with honors."
              />
              <hr style={{ borderTop: '3px solid #e22947' }} />

              <h2>Experience</h2>
              <Experience
                startYear={2013}
                endYear={2015}
                jobName="Napa Auto Parts"
                jobDescription="Managed a team of 10 employees and created schedules. 
                Performed bookkeeping for all financial transactions and balanced all accounts. 
                Responded to customer inquiries relating to orders placed in store or online, vehicle performance issues and other automotive related issues.
                Increased sales revenue for my branch by 21% by producing lasting business relationships with returning customers"
              />
              <Experience
                startYear={2015}
                endYear={2016}
                jobName="Wells Fargo"
                jobDescription="Managed and motivated teams of 10-15 representatives. Handled up to 150 customer inquiries per day on a variety of topics, includingresolving complaints, providing additional product details, and troubleshooting technical errors. Exceeded sales goals by 15% through effective up-selling of company’s products"
              />
              <Experience
                startYear={2017}
                endYear="Present"
                jobName="Mommin101"
                jobDescription="Created the Mommin101 website using WordPress. Utilized Google Analytics to learn about SEO tactics and how to improve. Authored and edited every article."
              />
              <Experience
                startYear={2017}
                endYear={2020}
                jobName="Amazon associate"
                jobDescription="Established business relationships with hundreds of sellers from multiple brands such as Amazon and Etsy. Closely monitored internal site and technology discussion to keep in line with company goals. Managed all social media accounts for marketers including building social media platforms from the ground up. Social media reached 300,000 followers in 2 years."
              />
              <hr style={{ borderTop: '3px solid #e22947' }} />
              <h2>Skills</h2>
              <Skills
                skill="JavaScript"
                progress={100}
              />
              <Skills
                skill="HTML5"
                progress={100}
              />
              <Skills
                skill="CSS"
                progress={100}
              />
              <Skills
                skill="React"
                progress={80}
              />
              <Skills
                skill="React Native"
                progress={75}
              />
              <Skills
                skill="NodeJS"
                progress={50}
              />
              <Skills
                skill="MongoDB"
                progress={50}
              />

            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Resume

