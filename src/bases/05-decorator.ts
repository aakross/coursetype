class NewPokemon {
  constructor(public readonly id: number, public name: string) {}
  scream() {
    console.log(`No quiero`);
  }
  speak() {
    console.log(`No quiero hacer caso`);
  }
}

const MyDecorator = () => {
  return (target: Function) => {
    // console.log(target);
    return NewPokemon;
  };
};

@MyDecorator()
export class Pokemon {
  constructor(public readonly id: string, public name: string) {}
  scream() {
    console.log(`${this.name.toUpperCase()}`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }
}

export const charmander = new Pokemon("4", "Charmander");

charmander.scream();
charmander.speak();
