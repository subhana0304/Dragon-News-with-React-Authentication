import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Navigation = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error => console.log(error))
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="white" className='my-2 align-items-center'>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className="mx-2" to='/category/0'>Home</Link>
                            <Link className="mx-2" to='/about'>About</Link>
                            <Link className="mx-2" to='/career'>Career</Link>

                        </Nav>
                        <Nav  className='align-items-center'>
                            {
                                user && <Nav.Link href="#deets"><FaUserCircle style={{ fontSize: '1.5rem' }}></FaUserCircle></Nav.Link>
                            }

                                {
                                    user ?
                                        <Button onClick={handleLogOut} variant="dark">Log out</Button> :
                                        <Link to="/login">
                                        <Button variant="dark">Log in</Button>
                                        </Link>
                                }
                    
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Navigation;