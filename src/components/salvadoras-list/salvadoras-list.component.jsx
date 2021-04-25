import React from "react";
import Grid from "@material-ui/core/Grid";
import SalvadorasItem from "../salvadoras-item/salvadoras-item.component";
import "./salvadoras-list.styles.scss";

const SalvadorasList = ({ title, items }) => (
  <Grid container spacing={3} justify="center">
    <Grid item xs={12} sm={6} md={4}>
      <div className="lista">
        <h1 className="lista-text">{title.toUpperCase()}</h1>
        <div>
          {items.map(({ id, ...otherItemProps }) => (
            <SalvadorasItem key={id} {...otherItemProps} />
          ))}
        </div>
      </div>
    </Grid>
  </Grid>
);

SalvadorasList.displayName = "SalvadorasList";

export default SalvadorasList;
