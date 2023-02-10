import React from 'react'
import './Home.css'
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