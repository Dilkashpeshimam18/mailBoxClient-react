import React from 'react'
import TextEditor from '../TextEditor/TextEditor'
import './Home.css'
import Editor from '../TextEditor/Editor'
import SendMail from '../SendMail/SendMail'
const Home = () => {
    return (
        <div className='home'>
            <h1>COMPOSE </h1>
            <SendMail />
        </div>
    )
}

export default Home