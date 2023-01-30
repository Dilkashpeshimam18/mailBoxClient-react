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
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { handleIsSelectedTab } from '../../store/slice/home-slice';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import SendIcon from '@mui/icons-material/Send';
import InboxIcon from '@mui/icons-material/Inbox';
import ReportIcon from '@mui/icons-material/Report';
import './Sidebar.css'
const Sidebar = () => {
    const navigate = useNavigate()
    const userMail = useSelector(state => state.email.userMail)
    const dispatch = useDispatch()

    let unreadMessage = userMail.filter((mail) => {
        return mail.read == false
    }).length
    return (
        <div
            className='sidebar'
            style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
        >
            <CDBSidebar textColor="#2c3e50" backgroundColor="rgba(68,96,170,.07)" className='sidebar'>
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
                            <CDBSidebarMenuItem onClick={() => dispatch(handleIsSelectedTab('Inbox'))} >
                                <Container>
                                    <Row >
                                        <Col xs={2}><InboxIcon /></Col>
                                        <Col >Inbox</Col>
                                        <Col>{unreadMessage}</Col>
                                    </Row>
                                </Container>

                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/unread-mail" activeClassName="activeClicked">
                            <CDBSidebarMenuItem onClick={() => dispatch(handleIsSelectedTab('Unread'))} >
                                <Container>
                                    <Row>
                                        <Col xs={2}><MarkEmailUnreadIcon /></Col>
                                        <Col>Unread</Col>
                                    </Row>
                                </Container>
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/sent-mail" activeClassName="activeClicked">
                            <CDBSidebarMenuItem onClick={() => dispatch(handleIsSelectedTab('Sent'))} >
                                <Container>
                                    <Row>
                                        <Col xs={2}><SendIcon /></Col>
                                        <Col>Sent</Col>
                                    </Row>
                                </Container>
                            </CDBSidebarMenuItem>
                        </NavLink>

                        <NavLink
                            exact
                            to="/"
                            target="_blank"
                            activeClassName="activeClicked"
                        >
                            <CDBSidebarMenuItem onClick={() => dispatch(handleIsSelectedTab('Spam'))} >
                                <Container>
                                    <Row>
                                        <Col xs={2}><ReportIcon /></Col>
                                        <Col>
                                            Spam

                                        </Col>
                                    </Row>
                                </Container>
                            </CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>
        </div>

    )
}

export default Sidebar