export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

type TwoWay = {
  throwingSpeed: number;
  battingAverage: number;
};

const Sasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const Hitomitu: Batter1 = {
  battingAverage: 0.367,
};

type TwoWayPlayer = Pitcher1 & Batter1;

const Shohei: TwoWayPlayer = {
  throwingSpeed: 154,
  battingAverage: 0.367,
};
