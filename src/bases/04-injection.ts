import {
  PokeApiAdapter,
  PokeApiFetchAdapter,
  type HttpAdapter,
} from "../api/pokeApi.adapter";
import type { PokeapiResponse } from "../interfaces/pokeapi-response.interface";

export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string,
    private readonly http: HttpAdapter // Todo: inyectar dependencias
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    // const { data } = await this.axios.get(url);
    const data = await this.http.get<PokeapiResponse>(
      "https://pokeapi.co/api/v2/pokemon/4"
    );
    console.log(data.moves);

    return data.moves;
  }
}

const pokeApi = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();

export const charmander = new Pokemon(4, "Charmander", pokeApiFetch);

charmander.getMoves();
