import React from 'react'
import './Signup.css'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import useAuth from '../../hooks/useAuth'

const Signup = () => {
    const { handleSignUp, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword } = useAuth()

    return (
        <>
            <Container className='mt-5 ml-5 justify-content-center'>
                <Row className='d-flex justify-content-center'>
                    <Col xs={5} >
                        <Card className='shadow-lg'>
                            <Card.Header className='p-3 text-center display-6'>SIGN UP</Card.Header>
                            <Card.Body>
                                <Form onSubmit={handleSignUp}>
                                    <Form.Group className='mb-3 p-1'>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter email...' required></Form.Control>
                                    </Form.Group>
                                    <Form.Group className='mb-3 p-1'>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter password...' required></Form.Control>
                                    </Form.Group>
                                    <Form.Group className='mb-3 p-1'>
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type='password' placeholder='Confirm password...' required></Form.Control>
                                    </Form.Group>
                                    <Form.Group className='d-grid gap-2 mt-2' >
                                        <Button type='submit' size='lg'>SIGN UP</Button>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Signup