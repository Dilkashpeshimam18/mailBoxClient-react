import React, { useState } from 'react'
import './Signup.css'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()

    const isPasswordConfirmed = () => {
        if (password && confirmPassword && password === confirmPassword) return true;
        return false
    }
    const handleSignUp = async (e) => {
        e.preventDefault()
        try {
            if (!isPasswordConfirmed(password, confirmPassword)) {
                alert('Password & confirm password should be same!')
            } else {
                if (email != '' && password != '' && confirmPassword != '') {
                    const data = {
                        email: email,
                        password: password,
                        returnSecureToken: true

                    }
                    const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBbr840gxPXx5wIRgO2KsmQYQpwHJKG91s', data, {
                        headers: {
                            'Content-Type': 'application/json',

                        }
                    })

                    setEmail('')
                    setPassword('')
                    setConfirmPassword('')

                    alert('Signup Successful!')
                    navigate('/login')
                }
            }
        } catch (err) {
            console.log(err.message)
            alert(err.response.data.error.message)
        }
    }
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