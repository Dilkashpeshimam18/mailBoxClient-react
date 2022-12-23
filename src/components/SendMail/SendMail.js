import React, { useState } from 'react'
import Editor from '../TextEditor/Editor'
import './SendMail.css'
import { Button, Form } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';
import ReactQuill from 'react-quill';
import '../../../node_modules/react-quill/dist/quill.snow.css';
const SendMail = () => {
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [value, setValue] = useState('');
    const onChange = (content, delta, source, editor) => {
        let text = editor.getText()
        setValue(text)

    }
    return (
        <div className='sendMail'>
            <div className='sendMail__container1'>
                <div className='sendMail__subContainer'>

                    <InputGroup className="mb-3">
                        <InputGroup.Text variant='primary' id="basic-addon1">To</InputGroup.Text>
                        <Form.Control
                            placeholder="Recipients"
                            aria-label="Recipients"
                            aria-describedby="basic-addon1"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </InputGroup>
                </div>
                <div className='sendMail__subContainer'>

                    <InputGroup>
                        <InputGroup.Text>Subject</InputGroup.Text>
                        <Form.Control placeholder='Add Subject' aria-label="With textarea" value={subject} onChange={(e) => { setSubject(e.target.value) }} />
                    </InputGroup>
                </div>

            </div>

            <div className='sendMail__container2'>
                <Editor value={value} setValue={setValue} onChange={onChange} />

            </div>
            <div style={{ paddingTop: '15px' }} className='d-grid gap-2 mt-5'>
                <Button size='lg'>SEND MAIL</Button>
            </div>
        </div>
    )
}

export default SendMail