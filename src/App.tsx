import { Navigate, Route, Routes } from "react-router-dom";

import { Home } from "./1 - ui/Pages/Home/Home";
import { PokemonDetails } from "./1 - ui/Pages/PokemonDetails/PokemonDetails";
import "./App.scss";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/pokemons" />} />
        <Route path="/pokemons" element={<Home />} />
        <Route path="/pokemon/:pokemonName" element={<PokemonDetails />} />
      </Routes>
    </div>
  );
}

export default App;
