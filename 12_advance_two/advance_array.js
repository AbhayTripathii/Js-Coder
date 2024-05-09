const myArr = [];
// %DebugPrint(myArr);

// continuos (PAKED SMI ELEMENTS) , HOLEY_ELEMENTS

// SMI (small integer)
// packed element
// Double (float, function, string)

const arrTwo = [1, 2, 3, 4, 5]; // not decimal
// PACKED_SMI_ELEMENTS

arrTwo.push(6.0); /////////////// DECIMAL
// PACKED_DOUBLE_ELEMENTS

arrTwo.push("7"); //////////////// STRING
// PAKED_ElEMENTS

arrTwo[10] = 11; //////////////// 11 after GAP (this is the gap(holes))
// HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

// how Array check index (value access from array )
// bound check (means if value in array show output, but if value not in array show undefined) that's easy
// hasOwnProperty(array, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// holes are vary expensive in js
//
//
//
//
const arrThree = [1, 2, 3, 4, 5];
console.log(arrThree[2]);

// continuous ====== SMI > DOUBLE > PACKED
// Holey_SMI > Holey_Double > Holey_Packed

const arrFour = new Array(3);
// just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = "1"; // HOLEY_ELEMENTS
arrFour[1] = "2"; // HOLEY_ELEMENTS
arrFour[2] = "3"; // HOLEY_ELEMENTS

// better
const arrFive = [];
arrFive.push("1"); // PACKED_ELEMENTS
arrFive.push("2"); // PACKED_ELEMENTS
arrFive.push("3"); // PACKED_ELEMENTS

const arrSix = [1, 2, 3, 4, 5];

arrSix.push(NaN); // DOUBLE_ELEMENTS ///// it's not sense to write this
arrSix.push(Infinity); // DOUBLE_ELEMENTS ///// it's not sense to write this
//
//
//
// for, for-of, forEach
