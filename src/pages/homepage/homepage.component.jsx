import React from 'react';
import Banner from '../../components/banner/banner.component';
import Directory from '../../components/directory/directory.component';
import Footer from '../../components/footer/footer.component';
import './homepage.styles.scss';

const HomePage = () => (
    <div>
        <Banner />
        <div className='homepage'>
            <h1 className='title-salvadoras'>SALVADORAS</h1>
            <Directory />
        </div>
    </div>
);


export default HomePage;