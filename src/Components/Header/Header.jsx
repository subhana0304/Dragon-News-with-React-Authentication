import React from 'react';
import './Header.css'
import logo from '../../assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";


const Header = () => {

    return (
        <Container>
            <div className="text-center p-5">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format('dddd, MMMM Do, YYYY')}</p>
            </div>
            <div className='d-flex bg-light p-3'>
                <Button variant="danger">Lotest</Button>
                <Marquee className="text-danger" speed={100}>
                    I can be a React component, multiple React components, or just some text.........I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            
        </Container>
    );
};

export default Header;