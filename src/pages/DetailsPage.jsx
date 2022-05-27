import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// APIURL: https://pokeapi.co/api/v2/pokemon/{name}
// Obj: Show the details (full pokemon)
// do a fetch to the API for the pokemon details
// define a useState to keep the data
// a useEffect to trigger the request
// render.

const DetailsPage = () => {
  const params = useParams();
  const [pokemon, setPokemon] = useState(null); // { ... }

  useEffect(() => {
    const fetchByName = async () => {
      const pokeName = params.pokeName;
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokeName}`
        );
        console.log("am I getting a response", response);
        setPokemon(response.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchByName();
  }, []);

  return (
    <div>
      <h1>Pokemon Details</h1>
      {pokemon ? (
        <div>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.sprites.front_default} />
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default DetailsPage;
