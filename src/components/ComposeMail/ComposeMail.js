import React from 'react'
import SendMail from '../SendMail/SendMail'
import './ComposeMail.css'

const ComposeMail = () => {
    return (
        <div className='composeMail'>
            <h1>COMPOSE </h1>
            <SendMail />
        </div>
    )
}

export default ComposeMail