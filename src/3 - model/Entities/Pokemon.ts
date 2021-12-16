import { Ability } from "../ValueObjects/Ability";
import { PokemonImages } from "../ValueObjects/PokemonImages";

export class Pokemon {
  id: number;
  name: string;
  images: PokemonImages;
  abilities: Ability[];

  getAbilities() {
    return this.abilities.map((ability) => ability.name).join(", ");
  }
}
