import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
// Obj: render some pokemons from https://pokeapi.co/api/v2/pokemon?limit=10&offset=0
// 1. import axios
// 2. define some useState to keep the data that we are going to fetch
// 3. define a useEffect to trigger this axios call
// 4. Save data (response) to state
// 5. render it.

const Homepage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {}, []); // empty => only runs when the page loads (once).

  console.log("what is my state?", term);

  // obj: Filter the list by the term
  // Filter + sorting:

  return (
    <div>
      <h1>Pokemon Search</h1>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <Link to="/about">Go to about page</Link>
      {pokemons.map((p) => (
        <div>
          <Link to={`/details/${p.name}`}>{p.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
