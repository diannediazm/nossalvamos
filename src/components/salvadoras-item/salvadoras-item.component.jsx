import React from "react";
import Paper from "@material-ui/core/Paper";
import "./salvadoras-item.styles.scss";

const SalvadorasItem = ({ name, imageUrl, describe, web }) => (
  <Paper className="paper">
    <h2 className="title-salvadora">{name}</h2>
    <img src={imageUrl} alt={name} className="image-salvadoras"></img>
    <h4 className="describe">{describe}</h4>
    <button onClick={() => window.open(web, "_blank")} className="button">
      Web
    </button>
  </Paper>
);

export default SalvadorasItem;
