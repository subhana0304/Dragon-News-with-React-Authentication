import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../../Components/Qzone/Qzone';
import bg from '../../assets/bg.png';

const RightNav = () => {
    return (
        <div>
            <div>
                <h4>Login With</h4>
                <Button variant="outline-primary" className='my-2'><FaGoogle /> Login with Google</Button>
                <Button variant="outline-dark"><FaGithub /> Login with Github</Button>
            </div>
            <div className='my-5'>
                <h4 className='mb-2'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>

        </div>
    );
};

export default RightNav;