import React from 'react';
import { ReactComponent as Background } from '../../assets/images/banner2.svg';
import './banner.styles.scss';

const Banner = () => (
    <div className='banner'>
        <Background />
    </div>
);

Banner.displayName = 'Banner';

export default Banner;