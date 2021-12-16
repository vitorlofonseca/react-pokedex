import React from "react";
import { Pokemon } from "../../../3 - model/Entities/Pokemon";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import "./PokemonList.scss";

type Props = {
  pokemons: Pokemon[];
};

export class PokemonList extends React.Component<Props, {}> {
  render() {
    return (
      <div className="c-pokemon-list">
        {!this.props.pokemons || this.props.pokemons.length === 0
          ? "No results"
          : this.props.pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
      </div>
    );
  }
}
