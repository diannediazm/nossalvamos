import React, { useState, useEffect, Fragment } from "react";
import { Grid } from "@material-ui/core";
import "./superwoman.styles.scss";

const Superwoman = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()

  const getData = async () => {
    try {
      const data = await fetch(
        "https://www.superheroapi.com/api.php/10224634608188146/720"
      );
      const data_json = await data.json();
      setData(data_json);
      setIsLoaded(true);

      // Nota: es importante manejar errores aquí y no en
      // un bloque catch() para que no interceptemos errores
      // de errores reales en los componentes.
    } catch (error) {
      setIsLoaded(true);
      setError(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const { name, biography, appearance, work, connections, image } = data;

  console.log(data);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Fragment >
        <Grid container spacing={3} >
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <h2>RANDOM FACT</h2>
            <p>
              ¿Sabes quién es la primera <b>SALVADORA</b> superheroína de la historia?
            </p>
            <p><b>Nombre:</b> {name} </p>
            <p><b>Nombre completo:</b> {biography["full-name"]}</p>
            <p><b>Alias:</b></p>
            <ul>
              {biography.aliases.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p><b>Lugar de nacimiento:</b> {biography["place-of-birth"]}</p>
            <p><b>Primera aparición: </b>{biography["first-appearance"]}</p>
            <p><b>Editora: </b>{biography.publisher}</p>
            <p><b>Género:</b> {appearance.gender}</p>
            <p><b>Ocupación:</b> {work.occupation}</p>
            <p><b>Afiliación grupal:</b> {connections["group-affiliation"]}</p>
            <p><b>Parientes:</b> {connections.relatives}</p>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <img src={image.url} alt="" className='superwoman-img' />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
};

export default Superwoman;
