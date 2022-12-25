import React, { useEffect } from 'react'
import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import './AllMail.css'

const AllMail = () => {
    const getAllMail = async () => {
        try {
            let email = localStorage.getItem('email')
            const response = await axios.get('https://newsday-io-default-rtdb.firebaseio.com/allMail.json')
            console.log(response.data)
        } catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        getAllMail()
    }, [])
    return (
        <ListGroup as="ol" numbered>
            <ListGroup.Item
                as="li"
                className="d-flex listClass justify-content-between align-items-start"

            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                </div>
                <Badge bg="primary" pill>
                    14
                </Badge>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                </div>
                <Badge bg="primary" pill>
                    14
                </Badge>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                </div>
                <Badge bg="primary" pill>
                    14
                </Badge>
            </ListGroup.Item>
        </ListGroup>

    )
}

export default AllMail