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
import useMail from '../../hooks/useMail';
const AllMail = () => {
    const dispatch = useDispatch()
    const userMail = useSelector((state) => state.email.userMail)
    const isRead = useSelector((state) => state.email.isRead)
    const navigate = useNavigate()
    const selectedTab = useSelector(state => state.home.isSeletedTab)
    const { getUserMail, deleteMail, handleIsReadMail } = useMail()



    useEffect(() => {
        const intervalCall = setInterval(() => {
            getUserMail()
        }, 2000);
        return () => {
            clearInterval(intervalCall);
        };

    }, [])
    useEffect(() => {
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
                            <div className="ms-2 me-auto data ">


                                <div onClick={() => {
                                    handleIsReadMail(mail.id)
                                    navigate('/inbox/' + mail.id)
                                }} className='m-2 d-flex'>
                                    <div>
                                        {mail.read == false && <FiberManualRecordIcon className='mt-3 p-1' sx={{ color: '#007FFF' }} />}

                                    </div>
                                    <div>
                                        <div className="fw-bold">
                                            {mail.subject}
                                        </div>
                                        <div>
                                            {mail.message}

                                        </div>
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