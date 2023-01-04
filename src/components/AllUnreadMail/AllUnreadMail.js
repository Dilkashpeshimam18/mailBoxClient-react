import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import AllMail from '../AllMail/AllMail'
const AllUnreadMail = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <AllMail />
        </div>
    )
}

export default AllUnreadMail