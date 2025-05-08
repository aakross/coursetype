import "./style.css";
import { name } from "./bases/01-types";
import { pokemons } from "./bases/02-objects";
import { charmander } from "./bases/03-classes";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
   <h2>Hola</h2>
   <h3>${charmander.name}</h3>
   <h3>${pokemons.join(",")}</h3>
  </div>
`;
