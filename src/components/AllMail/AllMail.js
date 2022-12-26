import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import './AllMail.css'
import { useDispatch, useSelector } from 'react-redux';
import { emailActions } from '../../store/slice/email-slice';
import { useNavigate } from 'react-router-dom'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import DeleteIcon from '@mui/icons-material/Delete';
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

    const deleteMail = async (id) => {
        try {
            console.log(id)
            const response = await axios.delete(`https://newsday-io-default-rtdb.firebaseio.com/allMail/${id}.json`)
            if (response.status == 200) {
                alert('Mail deleted successfully!')
                getUserMail()
            }
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getUserMail()
    }, [])
    return (
        <ListGroup >
            {userMail.length != 0 && (
                (userMail && userMail.map((mail, index) => {
                    return (
                        <ListGroup.Item
                            style={{ cursor: 'pointer' }}

                            className="d-flex listClass justify-content-between align-items-start "

                        >
                            <div className="ms-2 me-auto data">
                                {mail.read == false && <FiberManualRecordIcon className='mt-3 p-1' sx={{ color: '#007FFF' }} />}

                                <div onClick={() => {
                                    dispatch(emailActions.openRead())
                                    navigate('/inbox/' + mail.id)
                                }} className='m-2'>
                                    <div className="fw-bold">
                                        {mail.subject}
                                    </div>
                                    <div>
                                        {mail.message}

                                    </div>
                                </div>
                                <div className='p-3'>
                                    <DeleteIcon onClick={() => deleteMail(mail.id)} />

                                </div>

                            </div>

                        </ListGroup.Item>
                    )
                }))
            )}
            {userMail.length == 0 && <h2 className='p-3 m-2'>You don't have any mail yet!</h2>}



        </ListGroup>

    )
}

export default AllMail