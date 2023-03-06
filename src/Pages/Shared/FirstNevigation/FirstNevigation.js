import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './FirstNevigation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AddShoppingCart } from '@mui/icons-material';
import { Badge } from "@material-ui/core";
import useGirlsWorldCart from '../../../hooks/useGirlsWorldCart';
const FirstNevigation = () => {
  const { user, logout } = useAuth();
  const { cart } = useGirlsWorldCart();
  return (
    <div className='firtNevigation'>
      <>



        <Navbar bg="light" variant="light">

          <Navbar.Brand className='NevigationText' href="#home">Girls World</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/contact">Contact us</Nav.Link>
            <Nav.Link href="/about">About us</Nav.Link>
            {
              user?.email ?
                <Box>
                  <Nav.Link href="/dashboard" >Dashboard</Nav.Link>
                 

                  <div className='buttonlogout'>
                    <Button onClick={logout} variant="outline-secondary">Log Out</Button>
                  </div>


                </Box>

                :
                <Nav.Link href="/login" className='NevigationText'>Login</Nav.Link>
            }


          </Nav>
          <Navbar.Text className='displayname'>{user.displayName}</Navbar.Text>
         <div className='cardicon'>
          <Badge badgeContent={cart.length} color="error">
            <Link to={`/cart`} >
              <AddShoppingCart />
            </Link>
          </Badge>
          </div>
          

        </Navbar>
      </>

      {/*  */}


    </div>
  );
};

export default FirstNevigation;