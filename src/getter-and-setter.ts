export {};

// owner
// 所有者
// 初期化時に設定できる
// 途中で変更不可
// 参照可能

// secretNumber
// 個人番号
// 初期化時に設定可能
// 途中で変更可能
// 参照不可

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  print() {
    return 'Number ' + this._secretNumber;
  }
}

let card = new MyNumberCard('Ham', 12345);
//card.owner = 'はむ';
console.log(card.owner);
console.log(card.print());
card.secretNumber = 11111;
console.log(card.print());
