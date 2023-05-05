import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../../Components/Qzone/Qzone';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase.config';

const RightNav = () => {
    
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleLogin = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result)=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const handleGithubLogin = () =>{
        signInWithPopup(auth, githubProvider)
        .then((result) =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div>
            <div>
                <h4>Login With</h4>
                <Button onClick={handleGoogleLogin} variant="outline-primary" className='my-2'><FaGoogle /> Login with Google</Button>
                <Button onClick={handleGithubLogin} variant="outline-dark"><FaGithub /> Login with Github</Button>
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