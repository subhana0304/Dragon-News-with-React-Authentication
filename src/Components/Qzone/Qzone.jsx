import React from 'react';
import Qzone1 from '../../assets/qZone1.png';
import Qzone2 from '../../assets/qZone2.png';
import Qzone3 from '../../assets/qZone3.png';

const Qzone = () => {
    return (
        <div className='bg-light p-3 rounded'>
            <h4>Q-Zone</h4>
            <img className='img-fluid' src={Qzone1} alt="" />
            <img className='img-fluid' src={Qzone2} alt="" />
            <img className='img-fluid' src={Qzone3} alt="" />
        </div>
    );
};

export default Qzone;