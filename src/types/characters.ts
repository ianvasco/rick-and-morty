export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

export interface FavoriteCharacter extends Character {
  isFavorite: boolean;
}
