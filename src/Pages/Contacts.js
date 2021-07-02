import React, { Component } from 'react'
import { Container, Tab, Nav, Row, Col, Form, Button} from 'react-bootstrap';
import ContactUs from "../Components/emailHandler";

export default class Contacts extends Component {
    render() {
        return (
            <div>
              <ContactUs/>
            </div>
        )
    }
}
