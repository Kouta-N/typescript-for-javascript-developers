export {};

function add(a: number, b: number): number {
  return a + b;
}
type ReturnTypeFromAdd = ReturnType<typeof add>;
