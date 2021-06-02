import React, { Component } from 'react'
import { Container, Tab, Nav, Row, Col, Form, Button} from 'react-bootstrap';


export default class Contacts extends Component {
    render() {
        return (
            <div className="bgcolor">
                <Container>
                <Tab.Container id="left-tab-home" defaultActiveKey="prog">
                  <Row>
                    <Col sm={3} className="mt-3">
                      <Nav variant="pills" classname="flex-cloumn mt-2">
                        <Nav.Item>
                          <Nav.Link eventKey="prog">Code</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="photos">Photos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="em">Email</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content className="mt-3">
                            <Tab.Pane eventKey="prog">
                                <p>
                                    VK - https://vk.com/tail753
                                </p>
                            </Tab.Pane>

                            <Tab.Pane eventKey="photos">
                                <p>
                                    INSTAGRAM - https://www.instagram.com/commonplacefake/
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="em">
                                <Container>
                                    <h1 className="infotextdark"><p>Contact me<br/>
                                    (doesn't work yet)</p></h1>
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label className="infotextdark">Email:</Form.Label>
                                            <Form.Control type="email" placeholder="You email"/>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label className="infotextdark">Enter Your text:</Form.Label>
                                            <Form.Control as="textarea" rows="3"/>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Check it out"/>
                                        </Form.Group>
                                        <Button variant="dark" className="infotextdark">Submit</Button>
                                    </Form>
                                </Container>
                            </Tab.Pane>

                        </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </Container>
            </div>
        )
    }
}
