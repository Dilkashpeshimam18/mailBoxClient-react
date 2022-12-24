import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/slice/auth-slice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = useSelector(state => state.auth.token)

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        dispatch(authActions.logout())
        navigate('/login')
    }
    return (
        <Navbar bg="primary" variant='dark' expand="lg">
            <Container>
                <Navbar.Brand href="#home">MAILBOX CLIENT</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
                        {token == null ? <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link> : <Nav.Link onClick={handleLogout}>Logout</Nav.Link>}


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header