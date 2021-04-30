import React from "react";
import Grid from "@material-ui/core/Grid";
import SalvadorasItem from "../salvadoras-item/salvadoras-item.component";
import "./salvadoras-list.styles.scss";

const SalvadorasList = ({ title, items }) => (
  <div className="lista">
    <h1 className="lista-text">{title.toUpperCase()}</h1>
    <Grid container spacing={3} justify="center">
      {items.map(({ id, ...otherItemProps }) => (
        <SalvadorasItem key={id} {...otherItemProps} />
      ))}
    </Grid>
  </div>
);

SalvadorasList.displayName = "SalvadorasList";

export default SalvadorasList;
