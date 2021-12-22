import React from "react";
import PokemonService from "../../../2 - infrastructure/http/Pokemon/Pokemon.service";
import { Pokemon } from "../../../3 - model/Entities/Pokemon";
import { Paginator } from "../../Components/Paginator/Paginator";
import { PokeListLoader } from "../../Components/PokeListLoader/PokeListLoader";
import { PokemonList } from "../../Components/PokemonList/PokemonList";
import { Topbar } from "../../Components/Topbar/Topbar";
import "./Home.scss";

type HomeState = { pokemonList: Pokemon[]; listIsLoading: boolean };

class Home extends React.Component<{}, HomeState> {
  constructor(props: any) {
    super(props);

    this.onChangePage = this.onChangePage.bind(this);

    this.state = {
      pokemonList: [] as Pokemon[],
      listIsLoading: true,
    };
  }

  componentDidMount() {
    PokemonService.getPokemons(1).then((res) => {
      this.setState({
        pokemonList: res,
        listIsLoading: false,
      });
    });
  }

  onChangePage(pageNumber: number) {
    this.setState({
      listIsLoading: true,
    });

    PokemonService.getPokemons(pageNumber * 20 - 20).then((res) => {
      this.setState({
        pokemonList: res,
        listIsLoading: false,
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

          {this.state.listIsLoading ? (
            <PokeListLoader />
          ) : (
            <PokemonList pokemons={pokemonList} />
          )}
          <Paginator
            onChangePage={this.onChangePage}
            selectedPageIsLastOne={pokemonList.length < 20}
          />
        </div>
      </div>
    );
  }
}

export { Home };
