export {};

type MyExclude =
  | (string extends string | number ? never : string)
  | (number extends string | number ? never : number)
  | (DebugType extends string | number ? never : DebugType);
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type NonFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>;
type MyFunctionType = MyExclude;

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtract = Extract<SomeTypes, Function>;

type NullableTypes = string | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
