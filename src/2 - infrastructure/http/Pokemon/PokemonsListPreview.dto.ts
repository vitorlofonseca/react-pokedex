interface ShortedPokemon {
  name: string;
  url: string;
}

export interface PokemonsListPreviewDto {
  count: number;
  next: string;
  previous: string;
  results: ShortedPokemon[];
}
