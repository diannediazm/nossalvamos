import React, { useState, useEffect, Fragment } from "react";
import "./superwoman.styles.scss";

const Superwoman = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [id, setId] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch('https://www.superheroapi.com/api.php/10224634608188146/720')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setId(result);
        },
        // Nota: es importante manejar errores aquí y no en
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Fragment>
        <h2>RANDOM FACT</h2>
        <p>¿Sabes quién es la primera superheroína de la historia?</p>
        <p>Nombre: {id.name}</p>
             
      </Fragment>
          
          
      
    );
  }
};

export default Superwoman;
