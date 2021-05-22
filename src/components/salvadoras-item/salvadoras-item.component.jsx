import React from "react";
import { Grid, Paper } from "@material-ui/core";
import PropTypes from 'prop-types';
import "./salvadoras-item.styles.scss";

const SalvadorasItem = ({ name, imageUrl, describe, web }) => (
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Paper className="paper">
      <h2 className="title-salvadora">{name}</h2>
      <img src={imageUrl} alt={name} className="image-salvadoras"></img>
      <h4 className="describe">{describe}</h4>
      <button onClick={() => window.open(web, "_blank")} className="button">
        Web
      </button>
    </Paper>
  </Grid>
);

SalvadorasItem.propTypes = {
  children: PropTypes.element.isRequired
}

export default SalvadorasItem;

