## Variables
Variables in JavaScript are containers for storing data. JavaScript allows the usage of variables in the following three ways:

1. **var**	    Used to initialize to value, redeclared and its value can be reassigned.	
2. **let**	    Similar to var but is block scoped	
3. **const**	Used to declare a fixed value that cannot be changed.	

```javascript
console.log("Using var Keyword");
var x = 1;
if (x === 1) {
    var x = 2;
    console.log(x); // Output: 2
}
console.log(x); // Output: 2


// Using let keyword
console.log("Using let Keyword");
let x1 = 1;
if (x1 === 1) {
    let x1 = 2;
    console.log(x1); // Output: 2
}
console.log(x1); // Output: 1


// Using const keyword
console.log("Using const Keyword");
const number = 48;

// Changing const value will display TypeError
try {
    const number = 42;
} catch (err) {
    console.log(err);
}
console.log(number); // Output: 48

```

## Datatypes

1. **Number**	Numeric values can be real number or integers.  
***var x= number;***
2. **String**	Series of multiple characters written in quotes.  
***var x= “characters”;***
3. **Boolean**	Has only two values true or false.	var x= true/false;
4. **Null**	Special value that represents that the variable is empty.  
***var x= null;***
5. **Undefined**	Represents a variable which is declared but not assigned any value.	  
***let x; / let x= undefined;***
6. **Object**	Complex data type that allows us to store a collection of data.	  
***var x= {  
    key: “value”;  
    key: “value”;  
}***
7. **Array**	Stores multiple values of same type in a single variable.  
***var x =[‘y1’, ‘y2′,’y3′,’y4’];
y: any datatype***

8. **Function**	Functions are objects that can be called to execute a block of code.  
**function x(arguments){
    block of code
}**

```javascript
// String
let str = "hello Tripathi";
console.log(str);

// Number
const num = 10;
console.log(num);

// Boolean
const x = "true";
console.log(x);

// Undefined
let name;
console.log(name );

// Null
const number = null;
console.log(number);

// Symbol
const value1 = Symbol("hello");
const value2 = Symbol("hello");
console.log(value1);
console.log(value2);

// Here both values are different 
// as they are symbol type which 
// is immutable object
const object = {
    firstName: "Tripathi",
    lastName: null,
    batch: 2,
};
console.log(object);

```

## Operators

1. **Arithmetic**	Used to perform basic arithmetic operations on variables(operands).   
**+,-,*,/,%,++,–**
2. **Comparison**	used to compare two operands.  
**==, ===,!=,>,<,>=,<=**
3. **Bitwise**	Used to perform bitwise operations.  
**&, | , ^,~,<<, >>, >>>**
4. **Logical**	
There are three logical operators in javascript.  
**logical AND:** When all the operands are true  
--**exp1 && exp2**   
**logical OR:** When one or more than one operands are true   
--**exp1 ||exp2**  
**logical NOT:** Converts true to false  
--**!exp**
5. **Assignment**	Assignment operators assign values to JavaScript variables.  
**=, +=,-=,*=,/=,%=**

```javascript
let x = 5;
let y = 3;

// Addition
console.log("x + y = ", x); // 8

// Subtraction
console.log("x - y = ", x - y); // 2

// Multiplication
console.log("x * y = ", x * y); // 15

// Division
console.log("x / y = ", x / y);

// Remainder
console.log("x % y = ", (x % y)); // 2

// Increment
console.log("++x = ", ++x); // x is now 6
console.log("x++ = ", x++);
console.log("x = ", x); // 7

// Decrement
console.log("--x = ", --x); // x is now 6
console.log("x-- = ", x--);
console.log("x = ", x); // 5

// Exponentiation
console.log("x ** y =", x ** y);

// Comparison
console.log(x > y); // true

// Equal operator
console.log((2 == 2)); // true

// Not equal operator
console.log((3 != 2)); // true

// Strict equal operator
console.log((2 === 2)); // true

// Strict not equal operator
console.log((2 !== 2)); // true

// Logical Operator

// Logical AND
console.log((x < 6 && y < 5)); // true

// Logical OR
console.log((x < 6 || y > 6)); // true

// Logical NOT
console.log(!(x < 6)); // false

```

## Functions
1. **parseInt()**	Parses an argument passed to it and returns an integral number.
2. **parseFloat()**	Parses the argument and returns a floating-point number.
3. **isNaN()**	Determines if a given value is Not a Number.
4. **Number()**	Returns an argument after converting it to number.
5. **eval()	Used** for evaluating JavaScript programs presented as strings.
6. **prompt()**	Creates a dialogue box for taking input from the user.
7. **encodeURI()**	Encodes a URI into a UTF-8 encoding scheme.
8. **match()**	Used to search a string for a match against regular expression.

```javascript
// JS parseInt function
const num1 = parseInt("3.14");
console.log('Using parseInt("3.14") = ' + num1);

// JS parsefloat function
// It returns floating point Number until 
// it encounters Not a Number character
const num2 = parseFloat("2018.12@geeksforgeeks");
console.log('parseFloat("2018@geeksforgeeks") = ' + num2);

// JS isNAN function
console.log(isNaN(12));

// JS number() function
const num3 = Number(true);
console.log("Value of 'true': " + num3);

// JS eval() function
function evalfn() {
    const a = 4;
    const b = 4;
    const value = eval(new String(a * b));
    console.log(value);
}
evalfn();

// JS encode URI function
const url = "https://github.dev/AbhayTripathii/ Js-Coder";
const encodedURL = encodeURI(url);
console.log(encodedURL);
```

## Arrays
Arrays use numbers as index to access its “elements”.  
Declaration of an Array: There are basically two ways to declare an array.  
Example:  
**var House = [ ]; // Method 1  
var House = new Array(); // Method 2**

There are various operations

1. push()	Adds a new element at the very end of an array.
2. pop()	Removes the last element of an array.
3. concat()	Joins various arrays into a single array.
4. shift()	Removes the first element of an array
5. unShift()	Adds new elements at the beginning of the array
6. reverse()	Reverses the order of the elements in an array.
7. slice()	Pulls a copy of a part of an array into a new array.
8. splice()	Adds elements in a particular way and position.
9. toString()	Converts the array elements into strings.
10. valueOf()	Returns the primitive value of the given object.
11. indexOf()	Returns the first index at which a given element is found.
12. lastIndexOf()	Returns the final index at which a given element appears.
13. join()	Combines elements of an array into one single string and then returns it
14. sort()	Sorts the array elements based on some condition.