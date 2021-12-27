import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Pokemon } from "../../../3 - model/Entities/Pokemon";
import "./PokemonCard.scss";

type Props = {
  pokemon: Pokemon;
  navigate: NavigateFunction;
};

class PokemonCard extends React.Component<Props, {}> {
  render() {
    const pokemon = this.props.pokemon;

    return (
      <div
        className="c-pokemon-card"
        onClick={() => this.props.navigate(`/pokemon/${pokemon.name}`)}
      >
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

export default function (props: any) {
  const navigate = useNavigate();

  return <PokemonCard {...props} navigate={navigate} />;
}
