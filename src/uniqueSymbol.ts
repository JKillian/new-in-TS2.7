// instructions: switch between TS2.6 and 2.7 while viewing this file

const sym1: unique symbol = Symbol();
const sym2: unique symbol = sym1;
const sym3: symbol = sym1;
const sym4: typeof sym1 = sym1;
