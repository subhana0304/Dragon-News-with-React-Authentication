import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { useState } from 'react';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    useTitle('Rgister')

    const from = location.state?.from?.pathname || '/category/0';

    const handleAccepted = event =>{
        setAccepted(event.target.checked);
    }

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            form.reset();
            navigate(from, {replace: true})
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <Container className='mx-auto w-25 mt-5 bg-light p-4 rounded'>
        <h3>Please Register</h3>
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name='name' required placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' required placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' required placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check 
                onClick={handleAccepted}
                type="checkbox" 
                name="accept" 
                label={<>Accept <Link to="/terms">Terms & Condition</Link></>} />
            </Form.Group>
            <Button variant="primary" disabled={!accepted} type="submit">
                Register
            </Button>
            <br />
            <Form.Text className="text-secondary">
            Already have an Account? Please <Link to='/login'>Login</Link>
                </Form.Text>
            <Form.Text className="text-success">
            
                </Form.Text>
                <Form.Text className="text-danger">
            
                </Form.Text>
        </Form>
    </Container>
    );
};

export default Register;