import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import './salvadoras-item.styles.scss';

const SalvadorasItem = ({name, imageUrl, describe, web}) => (
  <Grid item xs={12} sm={6} md={4}>
    <Paper className='paper'>
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} className='image-salvadoras'></img>
      <h4 className='describe'>{describe}</h4>
      <button onClick={()=> window.open(web, "_blank")} className='button'>Web</button>
    </Paper>
  </Grid>
)

export default SalvadorasItem;