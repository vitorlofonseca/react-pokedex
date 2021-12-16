import { Pokemon } from "../../../3 - model/Entities/Pokemon";
import { PokemonsListPreviewDto } from "./PokemonsListPreview.dto";

export default class PokemonService {
  public static async getPokemons(): Promise<Pokemon[]> {
    const pokemonsListPreview = await fetch(
      "https://pokeapi.co/api/v2/pokemon"
    );
    const resPokemonsListPreview = await pokemonsListPreview
      .json()
      .then((data) => data as PokemonsListPreviewDto);

    const pokemons: Pokemon[] = [];

    for (let shortedPokemon of resPokemonsListPreview.results) {
      let requestPokemon = await fetch(shortedPokemon.url);
      let pokemon = await requestPokemon.json().then((data) => {
        data.images = data.sprites;
        data.abilities = data.abilities.map((ability: any) => ability.ability);

        return Object.assign(new Pokemon(), data);
      });

      pokemons.push(pokemon);
    }

    return pokemons;
  }
}
