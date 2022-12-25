import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
const SingleMail = () => {
    const [mail, setMail] = useState({})
    const params = useParams()
    const userMail = useSelector(state => state.email.userMail)
    useEffect(() => {
        console.log(params.id)
        let singleMail = userMail.filter((mail) => {
            return mail.id == params.id
        })
        setMail(singleMail)
        console.log(singleMail)
    }, [])
    return (
        <div className='d-flex'>
            <Container>
                <Sidebar />
            </Container>
            <Container>
                <Row>
                    <Col fluid>
                        <h3>{mail[0]?.subject}</h3>
                        <p>{mail[0]?.message}</p>
                    </Col>
                </Row>


            </Container>
        </div>
    )
}

export default SingleMail