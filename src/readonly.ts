export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisa = new VisaCard('はむ');
console.log(myVisa.owner);
// myVisa.owner = 'Ham';
