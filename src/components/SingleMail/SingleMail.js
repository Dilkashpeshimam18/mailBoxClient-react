import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'

const SingleMail = () => {
    const [mail, setMail] = useState({})
    const params = useParams()
    const userMail = useSelector(state => state.email.userMail)
    const isRead = useSelector(state => state.email.isRead)
    let singleMail;
    useEffect(() => {

        singleMail = userMail.filter((mail) => {
            return mail.id == params.id
        })
        for (let key in singleMail) {
            setMail({
                read: true,
                message: singleMail[key].message,
                subject: singleMail[key].subject,
                sendTo: singleMail[key].sendTo,
                sendFrom: singleMail[key].sendFrom
            })
            singleMail = {
                read: true,
                message: singleMail[key].message,
                subject: singleMail[key].subject,
                sendTo: singleMail[key].sendTo,
                sendFrom: singleMail[key].sendFrom
            }
        }
        // handleIsRead()

    }, [])

    // const handleIsRead = async () => {
    //     try {
    //         if (singleMail) {
    //             const response = await axios.put(`https://newsday-io-default-rtdb.firebaseio.com/allMail/${params.id}.json`, singleMail)
    //             console.log(response)
    //         }

    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    return (
        <div className='d-flex'>
            <Container>
                <Sidebar />
            </Container>
            <Container>
                <Row>
                    <Col fluid>
                        <h3>{mail?.subject}</h3>
                        <p>{mail?.message}</p>
                    </Col>
                </Row>


            </Container>
        </div>
    )
}

export default SingleMail