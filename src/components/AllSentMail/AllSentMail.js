import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import AllMail from '../AllMail/AllMail'
import './AllSentMail.css'

const AllSentMail = () => {
  return (
    <div className='allSentMail'>
      <Sidebar />
      <AllMail />
    </div>
  )
}

export default AllSentMail