import React from "react";
import { Pokemon } from "../../../3 - model/Entities/Pokemon";
import "./PokemonCard.scss";

type Props = {
  pokemon: Pokemon;
};

export class PokemonCard extends React.Component<Props, {}> {
  render() {
    const pokemon = this.props.pokemon;

    return (
      <div className="c-pokemon-card">
        <img
          className="c-pokemon-card__logo"
          src={pokemon.images.other.home.front_default}
          alt={pokemon.name + " picture"}
        />
        <div className="c-pokemon-card__name">{pokemon.name}</div>
        <div className="c-pokemon-card__abilities">
          {pokemon.getAbilities()}
        </div>
      </div>
    );
  }
}
