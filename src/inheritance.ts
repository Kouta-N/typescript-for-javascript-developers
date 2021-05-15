export {};

class Animal {
  constructor(public name: string) {}
  run(): string {
    return 'I can run';
  }
}

class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    super(name);
    this.speed = speed;
  }
  run(): string {
    const parentMessage = super.run();
    return `${super.run()} ${this.speed}km/h`;
  }
}

// let animal = new Animal();
let lion = new Lion('Leo', 80);

// console.log(animal.run());
console.log(lion.run());
