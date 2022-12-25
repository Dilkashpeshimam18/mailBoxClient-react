import React from 'react'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const Sidebar = () => {
    const navigate = useNavigate()
    return (
        <div
            style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
        >
            <CDBSidebar textColor="#2c3e50" backgroundColor="rgba(68,96,170,.07)">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a

                        className="text-decoration-none"
                        style={{ color: 'inherit' }}
                    >
                        <Button onClick={() => navigate('/compose')}>Compose</Button>

                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">Inbox</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/tables" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="table">Unread</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/profile" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Sent</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/analytics" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="chart-line">
                                Starred
                            </CDBSidebarMenuItem>
                        </NavLink>

                        <NavLink
                            exact
                            to="/hero404"
                            target="_blank"
                            activeClassName="activeClicked"
                        >
                            <CDBSidebarMenuItem icon="exclamation-circle">
                                Spam
                            </CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>
        </div>

    )
}

export default Sidebar