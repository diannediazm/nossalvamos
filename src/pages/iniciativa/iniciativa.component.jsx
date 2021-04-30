import React from "react";
import IniciativaText from "../../components/iniciativa-text/iniciativa-text.component";
import Superwoman from "../../components/superwoman/superwoman.component";
import { Container, Grid } from "@material-ui/core";

import './iniciativa.styles.scss';

const IniciativaPage = () => (
  <Container justify="center" alignitems="center" >
    <Grid item xs={12}>
      <div className='iniciativa'>
        <IniciativaText />
        <Superwoman />
      </div>
    </Grid>
  </Container>
);

export default IniciativaPage;
