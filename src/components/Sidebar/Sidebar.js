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
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const navigate = useNavigate()
    const userMail = useSelector(state => state.email.userMail)

    let unreadMessage = userMail.filter((mail) => {
        return mail.read == false
    }).length
    console.log(unreadMessage)
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
                            <CDBSidebarMenuItem icon="inbox">
                                <Container>
                                    <Row >
                                        <Col >Inbox</Col>
                                        <Col>{unreadMessage}</Col>
                                    </Row>
                                </Container>

                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/tables" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="table">
                                <Container>
                                    <Row>
                                        <Col>Unread</Col>
                                    </Row>
                                </Container>
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/profile" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">
                                <Container>
                                    <Row>
                                        <Col>Sent</Col>
                                    </Row>
                                </Container>
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/analytics" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="chart-line">
                                <Container>
                                    <Row>
                                        <Col>Starred</Col>
                                    </Row>
                                </Container>
                            </CDBSidebarMenuItem>
                        </NavLink>

                        <NavLink
                            exact
                            to="/hero404"
                            target="_blank"
                            activeClassName="activeClicked"
                        >
                            <CDBSidebarMenuItem icon="exclamation-circle">
                                <Container>
                                    <Row>
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