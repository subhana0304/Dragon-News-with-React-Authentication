import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Accept All this Terms and condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, commodi?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, commodi?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, commodi?</p>
            <p>Go Back <Link to="/register">Register</Link></p>
        </Container>
    );
};

export default Terms;