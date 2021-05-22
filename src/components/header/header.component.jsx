import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { ReactComponent as Logo } from "../../assets/images/icon.svg";
import "./header.styles.scss";

const Header = () => (
  <Grid item xs={3} class="justify-end">
    <div className="header">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="navs">
        <Link className="nav" id="iniciativa" to="/iniciativa">
          INICIATIVA
        </Link>
        <Link className="nav-salvadoras" to="/salvadoras">
          SALVADORAS
        </Link>
        <Link className="nav" id="contacto" to="/contacto">
          CONTACTO
        </Link>
      </div>
    </div>
  </Grid>
);

Header.displayName = "Header";

export default Header;
