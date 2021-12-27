import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Pokemon } from "../../../3 - model/Entities/Pokemon";
import "./PokemonListItem.scss";

type Props = {
  pokemon: Pokemon;
  navigate: NavigateFunction;
};

library.add(faAngleRight);

export class PokemonListItem extends React.Component<Props, {}> {
  render() {
    const pokemon = this.props.pokemon;

    return (
      <div
        className="c-pokemon-list-item"
        onClick={() => this.props.navigate(`/pokemon/${pokemon.name}`)}
      >
        <img
          className="c-pokemon-list-item__logo"
          src={pokemon.images.other.home.front_default}
          alt={pokemon.name + " picture"}
        />
        <div className="c-pokemon-list-item__informations">
          <div className="c-pokemon-list-item__name">{pokemon.name}</div>
          <div className="c-pokemon-list-item__abilities">
            {pokemon.getAbilities()}
          </div>
        </div>

        <FontAwesomeIcon className="c-open-pokemon-btn" icon="angle-right" />
      </div>
    );
  }
}

export default function (props: any) {
  const navigate = useNavigate();

  return <PokemonListItem {...props} navigate={navigate} />;
}
