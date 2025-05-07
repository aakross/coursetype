export const pokemonIds = [1, 20, 30, 34, 66];

interface Pokemon {
  id: number;
  name: string;
  age?: number; //El ? sirve para que no sea obligatorio el tipo age
}
export const Bulbasur: Pokemon = {
  id: 1,
  name: "Bulbasur",
};

export const charmander: Pokemon = {
  id: 2,
  name: "Charmander",
  age: 2,
};

export const pokemons: Pokemon[] = []; //Para crear el arreglo, se puede asignar el typo Pokemon y se le agregan []

pokemons.push(Bulbasur, charmander);
