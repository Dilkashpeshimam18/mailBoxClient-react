import React from 'react'
import TextEditor from '../TextEditor/TextEditor'
import './Home.css'
import Editor from '../TextEditor/Editor'
const Home = () => {
    return (
        <div className='home'>
            <h1>welcome to mail box client</h1>
            {/* <TextEditor /> */}
            <Editor />
        </div>
    )
}

export default Home