import React, { useState } from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authActions } from '../../store/slice/auth-slice'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            if (email != '' && password != '') {
                let data = {
                    email: email,
                    password: password,
                    returnSecureToken: true
                }
                const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBbr840gxPXx5wIRgO2KsmQYQpwHJKG91s', data, {
                    headers: {
                        'Content-Type': 'application/json',


                    }
                })
                if (response.data.idToken) {
                    let token = response.data.idToken
                    let email = response.data.email
                    localStorage.setItem('token', token)
                    localStorage.setItem('email', email)
                    dispatch(authActions.addToken(token))
                    alert('Login Successful!')
                    navigate('/')

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
                            <Card.Header className='p-3 text-center display-6'>LOGIN</Card.Header>
                            <Card.Body>
                                <Form onSubmit={handleLogin}>
                                    <Form.Group className='mb-3 p-1'>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter email...' required></Form.Control>
                                    </Form.Group>
                                    <Form.Group className='mb-3 p-1'>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter password...' required></Form.Control>
                                    </Form.Group>

                                    <Form.Group className='d-grid gap-2 mt-2' >
                                        <Button type='submit' size='lg'>LOGIN</Button>
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

export default Login