import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./send.styles.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "60ch",
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <Grid container item xs={12} sm={6} md={6} style={{ margin: "0 auto" }}>
      <form className={classes.root} noValidate autoComplete="off">
        <div className="contacto">
          <h1>¡Hablemos!</h1>
          <p>Obvio que faltan muchas más.</p>
          <p>
            Envíanos nombres y datos de la nueva Salvadora que quieres sumar a
            nuestra web.
          </p>

          <div>
            <TextField
              required
              id="outlined-required"
              label="Nombre"
              defaultValue="Escribe tu nombre"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-required"
              label="Correo"
              defaultValue="Escribe tu correo"
              variant="outlined"
            />
            <TextField
              id="outlined-number"
              label="Celular"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <TextField
              required
              id="outlined-required"
              label="Salvadora"
              defaultValue="¿A quién propones?"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-required"
              label="Salvadora"
              defaultValue="¿Por qué debería estar acá?"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-required"
              label="Salvadora"
              defaultValue="Deja su web o Instagram"
              variant="outlined"
            />
          </div>
          <Button variant="outlined">Enviar</Button>
        </div>
      </form>
    </Grid>
  );
}
