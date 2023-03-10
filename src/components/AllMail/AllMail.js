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
import CircularProgress from '@mui/material/CircularProgress';
import useAuth from '../../hooks/useAuth';

const AllMail = () => {
    const dispatch = useDispatch()
    const userMail = useSelector((state) => state.email.userMail)
    const navigate = useNavigate()
    const { getUserMail, deleteMail, handleIsReadMail } = useMail()
    const isLoading = useSelector(state => state.email.isLoading)
    let userEmail = localStorage.getItem('email')


    useEffect(() => {
        const intervalCall = setInterval(() => {
            getUserMail()
        }, 2000);
        return () => {
            clearInterval(intervalCall);
        };

    }, [])

    useEffect(() => {
        dispatch(emailActions.handleLoading(true))
    }, [])


    return (
        <ListGroup >
            {isLoading == true && <div style={{ display: 'flex', alignItem: 'center', justifyContent: 'center', padding: '20px', marginLeft: '600px', marginTop: '10px' }}>

                <CircularProgress />
            </div>}
            {isLoading == false && <>
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
                                            {mail.read == false && mail.sendFrom != userEmail && <FiberManualRecordIcon className='mt-3 p-1' sx={{ color: '#007FFF' }} />}

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

            </>}

        </ListGroup>

    )
}

export default AllMail