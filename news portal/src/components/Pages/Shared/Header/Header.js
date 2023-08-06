import React, { useContext, useEffect, useState } from 'react';

import './Header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';



const Header = () => {

    const { user, LogOut } = useContext(AuthContext);


    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    //console.log(user?.photoURL);



    const handelLogOut = () => {

        LogOut().then(() => {

        }).catch((error) => {

            console.error(error.message)
        })


    }


    return (
        <div className='mb-2'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><Link to='/'>Dragon-News</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">All News</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <>

                                {/* {user ? user.displayName : 'name doest not exist'} */}

                                {user?.uid ?
                                    <>
                                        <spam className='text-danger'>{user.email}</spam>
                                        <button onClick={handelLogOut}>Log-Out</button>
                                    </>
                                    : <>


                                        <Nav.Link><Link to='/login'>Logain</Link></Nav.Link>
                                        <Nav.Link> <Link to='/register'>Rergister</Link></Nav.Link>


                                    </>}
                            </>
                            <Nav.Link eventKey={2} href="#memes">

                                <div className={`App ${theme} form-check form-switch bg-dark`} >
                                    <input onClick={toggleTheme} class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                    <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                                </div>
                            </Nav.Link>
                        </Nav>

                        <div className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;