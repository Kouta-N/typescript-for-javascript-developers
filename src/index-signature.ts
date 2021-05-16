export {};

interface Profile {
  [index: string]: string | number | boolean;
}
let profile: Profile = { name: 'Ham' };

profile.name = 'Ham';
profile.age = 43;
profile.nationality = 'Japan';

console.log(profile);
