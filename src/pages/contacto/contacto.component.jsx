import React from 'react';
import Send from '../../components/send/send.component';
import './contacto.styles.scss'; 

const Contacto = () => (
    <div className='contacto'>
        <h1>¡Hablemos!</h1>
        <p>Obvio que faltan muchas más. Envíanos nombres y datos como página web o red social de la nueva Salvadora que quieres sumar a nuestra web.</p>
            <Send />
    </div>
);

export default Contacto;