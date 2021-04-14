import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withRouter } from 'react-router-dom';
import './salvadoras-list.styles.scss';

const SalvadorasList = ({name, imageUrl, describe, history, linkUrl, match}) => (
  <Grid item xs={12} sm={6} md={4}>
    <Paper className='paper'>
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} className='image-salvadoras'></img>
      <h4 className='describe'>{describe}</h4>
      <button onClick={() => history.push(`${match.url}${linkUrl}`)} className='button'>WEB</button>
    </Paper>
  </Grid>
)

/*const SalvadorasList = ({ name, imageUrl, size, history, linkUrl, match }) => (
    
    <div 
        className={`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div
            className='background-image'
            style= {{
                backgroundImage: `url(${imageUrl})`
            }}
        />
            <div className='content'>
                <h1 className='name'>{name.toUpperCase()}</h1>
            </div>
    </div>
);*/

SalvadorasList.displayName = 'SalvadorasList';

export default withRouter(SalvadorasList);