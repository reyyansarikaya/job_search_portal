import React from "react"
import {Button, Navbar, Nav, NavDropdown, Form, Container, FormControl} from 'react-bootstrap';
import '../my.css'
import {LinkContainer} from 'react-router-bootstrap'
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../actions/userAction';

function Header() {
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <div>
            <Navbar bg="warning" expand="lg">
                <Container fluid>
                    <Navbar.Brand className='nav-color' href="#">İş Arama Platformu</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{maxHeight: '100px'}}
                            navbarScroll
                        >
                            <LinkContainer to="/">
                                <Nav.Link className='nav-color'><i className="fa-solid fa-house"></i>Anasayfa</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/">
                                <Nav.Link className='nav-color'><i
                                    className="fa-solid fa-layer-group"></i> İlanlar</Nav.Link>
                            </LinkContainer>

                            {userInfo ? (
                                    <NavDropdown className='nav-color' title={userInfo.name} id='username'>
                                        <LinkContainer to="/profile">
                                            <NavDropdown.Item className='nav-color'>Profil</NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Item className='nav-color'
                                                          onClick={logoutHandler}>Çıkış</NavDropdown.Item>

                                    </NavDropdown>

                                ) :
                                (

                                    <LinkContainer to="/Login">

                                        <Nav.Link className='nav-color' href="#action2"><i
                                            className="fa-solid fa-user"></i> Üye girişi</Nav.Link>
                                    </LinkContainer>


                                )}

                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown className='nav-color' title='Admin' id='username'>
                                    <LinkContainer to="/admin/userlist">
                                        <NavDropdown.Item className='nav-color'>Kullanıcılar</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/admin/productlist">
                                        <NavDropdown.Item className='nav-color'>Ürünler</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/admin/orderlist">
                                        <NavDropdown.Item className='nav-color'>Siparişler </NavDropdown.Item>
                                    </LinkContainer>


                                </NavDropdown>

                            )}

                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="İş İlanı Ara"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-light">Ara</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    )
}

export default Header