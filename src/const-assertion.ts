export {};

let name = 'Atsushi';

let nickname = 'Ham' as const;

let profile = {
  name: 'Atsushi',
  height: 178,
} as const;

profile.name = 'Ham';
