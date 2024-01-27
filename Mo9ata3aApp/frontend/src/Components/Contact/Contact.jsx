import React from 'react';
import "./Contact.style.css";
import Container from 'react-bootstrap/Container';
import {Col , Row , Form ,Badge , Button } from 'react-bootstrap/';
import Alert from 'react-bootstrap/Alert';
import { Zoom } from 'react-reveal';




const Contact = () => {
  return (
    <Container  className='Contact' id="contact">
    <Zoom>
        <Alert variant='dark' className='bg-dark'> 
            <Alert.Heading className='text-center text-white'>If you are facing any technical problem please Contact us </Alert.Heading>
        </Alert>
            <Form className=''>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" autoFocus required>
                        
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Problem </Form.Label>
                    <Form.Control type="text" required>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Describe In details  </Form.Label>
                    <Form.Control type="text" as={"textarea"} style={{height:"200px"}} required>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Button type='submit' variant='dark' className='btn-lg' >Send Problem</Button>
                </Form.Group>
            </Form>
        
    </Zoom>
    </Container>
  )
}

export default Contact