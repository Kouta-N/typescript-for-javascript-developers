export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atsushi';
  static lastName: string = 'Isida';

  static work() {
    return 'Hey';
  }
}

let me = new Me();
console.log(Me.isProgrammer);
console.log(Me.work());
