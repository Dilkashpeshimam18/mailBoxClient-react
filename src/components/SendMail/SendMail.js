import React, { useEffect, useState } from 'react'
import Editor from '../TextEditor/Editor'
import './SendMail.css'
import { Button, Form } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';
import ReactQuill from 'react-quill';
import '../../../node_modules/react-quill/dist/quill.snow.css';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { emailActions } from '../../store/slice/email-slice';
import useMail from '../../hooks/useMail';
import { Container, Row, Col } from 'react-bootstrap'


const SendMail = () => {

    const [isSent, setIsSent] = useState(false)

    const { storeMail, email, setEmail, value, setValue, subject, setSubject } = useMail()

    const token = useSelector((state) => state.auth.token)

    const onChange = (content, delta, source, editor) => {
        let text = editor.getText()
        setValue(text)
        if (isSent == true) {
            setValue('')
        }
    }

    const sendEmail = (e) => {
        e.preventDefault()
        if (token == null) {
            alert('You need to login first!')
        } else {
            if (email != '' && subject != '' && value != '') {
                let values = {
                    from_name: 'dilkashpeshimam@gmail.com',
                    to_name: email,
                    subject: subject,
                    message: value
                }
                emailjs.send('service_xh7xax8', 'template_xsgs1nf', values, 'xlO1TUS4HkUawigyq')
                    .then(() => {
                        setIsSent(true)
                        storeMail()
                        alert('Email sent sucessfully!')
                        window.location.reload(false)

                    })

                    .catch((err) => {
                        console.log(err)
                    })
            } else {
                alert('Please fill all the fields!')
            }
        }

    }


    return (
        <>
            <Container className='mt-5 ml-5 justify-content-center'>
                <Row className='d-flex justify-content-center'>
                    <Col sm={6} >
                        <InputGroup className="mb-3">
                            <InputGroup.Text variant='primary' id="basic-addon1">To</InputGroup.Text>
                            <Form.Control
                                placeholder="Recipients"
                                aria-label="Recipients"
                                aria-describedby="basic-addon1"
                                value={email}
                                name='to_name'
                                onChange={(e) => { setEmail(e.target.value) }}
                                required
                            />
                        </InputGroup>
                        <div className='sendMail__subContainer'>

                            <InputGroup>
                                <InputGroup.Text>Subject</InputGroup.Text>
                                <Form.Control placeholder='Add Subject' aria-label="With textarea" value={subject} onChange={(e) => { setSubject(e.target.value) }} required />
                            </InputGroup>
                        </div>


                        <div className='sendMail__container2 mb-5'>
                            <Editor value={value} setValue={setValue} onChange={onChange} />

                        </div>
                        <div style={{ paddingTop: '15px' }} className='d-grid gap-2 mt-5'>
                            <Button onClick={sendEmail} size='lg'>SEND MAIL</Button>
                        </div>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default SendMail