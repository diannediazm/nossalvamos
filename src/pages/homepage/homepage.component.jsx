import React from 'react';
import Banner from '../../components/banner/banner.component';
import Directory from '../../components/directory/directory.component';

const HomePage = () => (
    <div>
        <Banner />
        <div className='homepage'>
            <Directory />
        </div>
    </div>
);


export default HomePage;