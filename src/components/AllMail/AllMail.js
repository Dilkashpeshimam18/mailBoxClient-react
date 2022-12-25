import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import './AllMail.css'
import { useDispatch, useSelector } from 'react-redux';
import { emailActions } from '../../store/slice/email-slice';
import { useNavigate } from 'react-router-dom'
const AllMail = () => {
    const dispatch = useDispatch()
    const userMail = useSelector((state) => state.email.userMail)
    const navigate = useNavigate()

    const getUserMail = async () => {
        try {
            let email = localStorage.getItem('email')
            const response = await axios.get('https://newsday-io-default-rtdb.firebaseio.com/allMail.json')
            let res = response.data
            let data = []
            for (let key in res) {
                data.push({
                    id: key,
                    sendFrom: res[key].send_from,
                    sendTo: res[key].send_to,
                    subject: res[key].subject,
                    message: res[key].value,
                    read: false

                })
            }

            let userReceivedEmail = data.filter((mail) => {
                return mail.sendTo == email
            })

            dispatch(emailActions.addUserMail(userReceivedEmail))



        } catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        getUserMail()
    }, [])
    return (
        <ListGroup >
            {userMail.length == 0 && <h2 className='p-3 m-2'>You don't have any mail yet!</h2>}
            {userMail.length != 0 && (
                (userMail && userMail.map((mail, index) => {
                    return (
                        <ListGroup.Item
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigate('/inbox/' + mail.id)}
                            className="d-flex listClass justify-content-between align-items-start "

                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{mail.subject}</div>
                                {mail.message}
                            </div>

                        </ListGroup.Item>
                    )
                }))
            )}


        </ListGroup>

    )
}

export default AllMail