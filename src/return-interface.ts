export {};

class Magician {}
class Bishop {}

class Taro extends Magician {}

interface WiseMan {
  ionazun(): void;
}

interface Soldier {
  attack(): void;
}

class Jiro implements WiseMan, Soldier {
  ionazun(): void {
    console.log('ionazun');
  }

  attack(): void {
    console.log('attack');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.attack();
