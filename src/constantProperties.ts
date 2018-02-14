// instructions: switch between TS2.6 and 2.7 while viewing this file

const key = "key";
const TYPE_NAME = Symbol("type name generator");
const OTHER_SYMBOL = Symbol();

type MyInterface = {
    [key]: "abc",
    [TYPE_NAME]: () => string;
}

const obj: MyInterface = {
    [TYPE_NAME]: () => "MyInterface",
    [OTHER_SYMBOL]: () => "Whoops!",
}

obj[TYPE_NAME];
obj.key;


