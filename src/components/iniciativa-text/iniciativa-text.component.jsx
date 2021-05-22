import React from 'react';
import Grid from "@material-ui/core/Grid";
import './iniciativa-text.styles.scss';

const IniciativaText = () => (
    
    <Grid item xs={12} sm={6} md={4} lg={3} className='iniciativa-text'>
       <h1>SALVADORAS</h1>
       <p>Nos Salvamos es una iniciativa que pretende armar una vitrina de mujeres talentosas en diversos ámbitos. Un tipo repositorio que esté dispuesto para cada vez que alguien necesite algún tipo de ayuda, ya sea, relajarse haciendo ejercicio, motivarse con charlistas, hacer manualidades y mucho más. Mujeres ayudando a mujeres en momentos de dificultad y superación.</p>
       </Grid>
);

IniciativaText.displayName = 'IniciativaText';

export default IniciativaText;