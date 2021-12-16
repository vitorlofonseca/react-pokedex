import React from "react";
import PokemonService from "../../../2 - infrastructure/http/Pokemon/Pokemon.service";
import { Pokemon } from "../../../3 - model/Entities/Pokemon";
import { PokemonList } from "../../Components/PokemonList/PokemonList";
import { Topbar } from "../../Components/Topbar/Topbar";
import "./Home.scss";

type HomeState = { pokemonList: Pokemon[] };

class Home extends React.Component<{}, HomeState> {
  constructor(props: any) {
    super(props);

    this.state = {
      pokemonList: [] as Pokemon[],
    };
  }

  componentDidMount() {
    PokemonService.getPokemons().then((res) => {
      this.setState({
        pokemonList: res,
      });
    });
  }

  render() {
    const pokemonList = this.state.pokemonList;

    return (
      <div className="c-page-container">
        <Topbar></Topbar>

        <div className="c-content-container">
          <div className="l-content-container-header">
            <h2 className="c-content-container--title">Pokémons</h2>
            <input
              className="c-content-container--search"
              type="text"
              placeholder="Search some pokemon"
            />
          </div>

          <PokemonList pokemons={pokemonList} />
        </div>
      </div>
    );
  }
}

export { Home };
