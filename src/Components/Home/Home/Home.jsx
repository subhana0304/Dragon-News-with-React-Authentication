import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <p>Welcome to my home</p>
        </div>
    );
};

export default Home;