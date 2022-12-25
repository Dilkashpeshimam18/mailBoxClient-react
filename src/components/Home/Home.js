import React from 'react'
import TextEditor from '../TextEditor/TextEditor'
import './Home.css'
import Editor from '../TextEditor/Editor'
import SendMail from '../SendMail/SendMail'
import { Button } from 'react-bootstrap'
import Sidebar from '../Sidebar/Sidebar'
import AllMail from '../AllMail/AllMail'

const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <AllMail />
        </div>
    )
}

export default Home