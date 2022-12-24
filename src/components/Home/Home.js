import React from 'react'
import TextEditor from '../TextEditor/TextEditor'
import './Home.css'
import Editor from '../TextEditor/Editor'
import SendMail from '../SendMail/SendMail'
import { Button } from 'react-bootstrap'
import Sidebar from '../Sidebar/Sidebar'

const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
        </div>
    )
}

export default Home