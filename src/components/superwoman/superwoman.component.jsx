import React, { useState, useEffect, Fragment } from "react";
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

  const {
    name,
    powerstats,
    biography,
    appearance,
    work,
    connections,
    image,
  } = data;

  console.log(data);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Fragment>
        <h2>RANDOM FACT</h2>
        <p>¿Sabes quién es la primera SALVADORA de la historia?</p>
        <p>Nombre: {name} </p>
        <p>Inteligencia: {powerstats.intelligence}</p>
        <p>Fuerza: {powerstats.strength}</p>
        <p>Velocidad: {powerstats.speed}</p>
        <p>Durabilidad: {powerstats.durability}</p>
        <p>Poder: {powerstats.power}</p>
        <p>Combate: {powerstats.combat}</p>
        <p>Nombre completo: {biography["full-name"]}</p>
        <p>Alter egos: {biography["alter-egos"]}</p>
        <p>Alias</p>
        <ul>
          {biography.aliases.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>Lugar de nacimiento: {biography["place-of-birth"]}</p>
        <p>Primera aparición: {biography["first-appearance"]}</p>
        <p>Editora: {biography.publisher}</p>
        <p>Alineación: {biography.alignment}</p>
        <p>Género: {appearance.gender}</p>
        <p>Raza: {appearance.race}</p>
        <p>Altura:</p>
        <ul>
          {appearance.height.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>Peso:</p>
        <ul>
          {appearance.weight.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>Color de ojos: {appearance["eye-color"]}</p>
        <p>Color de cabello: {appearance["hair-color"]}</p>
        <p>Ocupación: {work.occupation}</p>
        <p>Afiliación grupal: {connections["group-affiliation"]}</p>
        <p>Parientes: {connections.relatives}</p>
        <img src={image.url} alt="" />
      </Fragment>
    );
  }
};

export default Superwoman;
