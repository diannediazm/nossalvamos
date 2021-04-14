import React from 'react';
import Banner from '../../components/banner/banner.component';
import Category from '../../components/category/category.component';
import './homepage.styles.scss';

const HomePage = () => (
    <div>
        <Banner />
        <div className='homepage'>
            <h1 className='title-salvadoras'>SALVADORAS</h1>   
            <Category />
        </div>
    </div>
);


export default HomePage;