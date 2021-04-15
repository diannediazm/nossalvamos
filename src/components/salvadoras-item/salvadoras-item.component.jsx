import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import './salvadoras-item.styles.scss';

const SalvadorasItem = ({name, imageUrl, describe}) => (
  <Grid item xs={12} sm={6} md={4}>
    <Paper className='paper'>
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} className='image-salvadoras'></img>
      <h4 className='describe'>{describe}</h4>
      <button className='button'>WEB</button>
    </Paper>
  </Grid>
)

export default SalvadorasItem;