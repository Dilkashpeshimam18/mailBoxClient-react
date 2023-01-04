import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './SingleMail.css'

const SingleMail = () => {
    const [mail, setMail] = useState({})
    const params = useParams()
    const userMail = useSelector(state => state.email.userMail)
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

    }, [])



    return (
        <div className='d-flex'>
            <div style={{ paddingLeft: 0 }}>
                <Sidebar />
            </div>
            {!mail?.sendTo && !mail.sendFrom && !mail.message ? <>
                <div className='singleMail__container'>
                    <div>
                        <h3>{mail?.subject}</h3>


                    </div>

                </div>
            </> : <div className='singleMail__container'>
                <div>
                    <h3>{mail?.subject}</h3>

                    <p style={{ fontWeight: 'bold', paddingTop: '5px' }}>From : {mail?.sendFrom}</p>
                    <span>To : {mail?.sendTo}</span>
                </div>
                <div className='singleMail__message'>
                    <p>{mail?.message}</p>

                </div>
            </div>}

        </div>
    )
}

export default SingleMail