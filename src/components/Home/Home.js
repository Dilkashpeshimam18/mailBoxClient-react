import React from 'react'
import TextEditor from '../TextEditor/TextEditor'
import './Home.css'
import Editor from '../TextEditor/Editor'
import SendMail from '../SendMail/SendMail'
const Home = () => {
    return (
        <div className='home'>
            <h1>Welcome to mail box client</h1>
            <SendMail />
        </div>
    )
}

export default Home