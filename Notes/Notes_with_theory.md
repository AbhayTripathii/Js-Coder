## Variables
Variables in JavaScript are containers for storing data. JavaScript allows the usage of variables in the following three ways:

1. `var`	    Used to initialize to value, redeclared and its value can be reassigned.	
2. `let`	    Similar to var but is block scoped	
3. `const`	Used to declare a fixed value that cannot be changed.	

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

1. `Number`	Numeric values can be real number or integers.  
`*var x= number;`*
2. `String`	Series of multiple characters written in quotes.  
`*var x= “characters”;`*
3. `Boolean`	Has only two values true or false.	var x= true/false;
4. `Null`	Special value that represents that the variable is empty.  
`*var x= null;`*
5. `Undefined`	Represents a variable which is declared but not assigned any value.	  
`*let x; / let x= undefined;`*
6. `Object`	Complex data type that allows us to store a collection of data.	  
`*var x= {  
    key: “value”;  
    key: “value”;  
}`*
7. `Array`	Stores multiple values of same type in a single variable.  
`*var x =[‘y1’, ‘y2′,’y3′,’y4’];
y: any datatype`*

8. `Function`	Functions are objects that can be called to execute a block of code.  
`function x(arguments){
    block of code
}`

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

1. `Arithmetic`	Used to perform basic arithmetic operations on variables(operands).   
`+,-,*,/,%,++,–`
2. `Comparison`	used to compare two operands.  
`==, ===,!=,>,<,>=,<=`
3. `Bitwise`	Used to perform bitwise operations.  
`&, | , ^,~,<<, >>, >>>`
4. `Logical`	
There are three logical operators in javascript.  
`logical AND:` When all the operands are true  
--`exp1 && exp2`   
`logical OR:` When one or more than one operands are true   
--`exp1 ||exp2`  
`logical NOT:` Converts true to false  
--`!exp`
5. `Assignment`	Assignment operators assign values to JavaScript variables.  
`=, +=,-=,*=,/=,%=`

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
console.log("x ` y =", x ` y);

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
1. `parseInt()`	Parses an argument passed to it and returns an integral number.
2. `parseFloat()`	Parses the argument and returns a floating-point number.
3. `isNaN()`	Determines if a given value is Not a Number.
4. `Number()`	Returns an argument after converting it to number.
5. `eval()	Used` for evaluating JavaScript programs presented as strings.
6. `prompt()`	Creates a dialogue box for taking input from the user.
7. `encodeURI()`	Encodes a URI into a UTF-8 encoding scheme.
8. `match()`	Used to search a string for a match against regular expression.

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
`var House = [ ]; // Method 1 `

`var House = new Array(); // Method 2`

There are various operations

1. `push()`	Adds a new element at the very end of an array.
2. `pop()`	Removes the last element of an array.
3. `concat()`	Joins various arrays into a single array.
4. `shift()`	Removes the first element of an array
5. `unShift()`	Adds new elements at the beginning of the array
6. `reverse()`	Reverses the order of the elements in an array.
7. `slice()`	Pulls a copy of a part of an array into a new array.
8. `splice()`	Adds elements in a particular way and position.
9. `toString()`	Converts the array elements into strings.
10. `valueOf()`	Returns the primitive value of the given object.
11. `indexOf()`	Returns the first index at which a given element is found.
12. `lastIndexOf()`	Returns the final index at which a given element appears.
13. `array[index]`	Accesses an element at the specified index in the array.
14. `array[index]` = value	Modifies the element at the specified index in the array.
15. `array.forEach()`	Executes a provided function once for each array element.
16. `array.map()`	Creates a new array with the results of calling a function on every element.
17. `array.filter()`	Creates a new array with elements that pass a test.
18. `array.reduce(, initialValue)`	Reduces the array to a single value.
19. `array.find()`	Returns the first element that satisfies a condition.
20. `array.findIndex()`	Returns the index of the first element that satisfies a condition.
21. `array.some()`	Checks if at least one element passes a test.
22. `array.every()`	Checks if all elements pass a test.
23. `array.includes(value)`	Checks if an array contains a certain value.
24. `array.sort(compareFunction)`	Sorts an array in place.
25. `array.length` = newLength	Changes the length of an array.
26. `array.fill(value, start, end)`	Fills the specified elements of an array with a value.
27. `Array.isArray(array)`	Checks whether a variable is an array.
28. `array.flat(depth)`	Flattens nested arrays.
29. `JSON.parse(JSON.stringify(array))`	Creates a deep copy of an array.
30. `array.length` === 0	Checks if an array is empty.
31. `array.join(separator)`*	Joins all elements of an array into a string.
32. `array.map((element, index) => { ... })`	Maps each element to an object with its index.
33. `Array.from(new Set(array))`	Removes duplicate elements from an array.
34. `array[0].map((_, colIndex) => array.map(row => row[colIndex]))`	Transposes a 2D 20. array.
35. `array.reduce((acc, value) => (value === search ? acc + 1 : acc), 0)`	Counts occurrences of an element.
36. `array.reduce((acc, value, index) => (index % size === 0 ? acc.push([value]) : acc[acc.length - 1].push(value), acc), [])`	Chunks an array into smaller arrays.
37. `array1.map((value, index) => [value, array2[index]])`	Zips two arrays together.
38. `array1.filter(value => array2.includes(value))`	Intersects two arrays, returning common elements.
39. `array1.filter(value => !array2.includes(value))` Finds elements in the first array not present in the second array.
40. `Array.from(new Set([...array1, ...array2]))`	Unions two arrays, removing duplicates.
41. `array.slice(n).concat(array.slice(0, n))`	Rotates an array by a given number of positions.
42. `array.sort(() => Math.random() - 0.5)`	Shuffles the elements of an array randomly.
43. `Array.from(new Set(array))`	Removes duplicate elements from an array.


```javascript
// Declaring and initializing arrays

// Number Array
let arr = [10, 20, 30, 40, 50];
let arr1 = [110, 120, 130, 140];

// String array
let string_arr = ["Alex", "peter", "chloe"];

// push: Adding elements at the end of the array
arr.push(60);
console.log("After push op " + arr);

// unshift() Adding elements at the start of the array
arr.unshift(0, 10);
console.log("After unshift op " + arr );

// pop: removing elements from the end of the array
arr.pop();
console.log("After pop op" + arr);

// shift(): Removing elements from the start of the array
arr.shift();
console.log("After shift op " + arr);

// splice(x,y): removes x number of elements
// starting from index y
arr.splice(2, 1);
console.log("After splice op" + arr);

// reverse(): reverses the order of elements in array
arr.reverse();
console.log("After reverse op" + arr);

// concat(): merges two or more array
console.log("After concat op" + arr.concat(arr1));

```


## Loops
With loops you can evaluate a set of instructions/functions repeatedly until certain condition is reached.

1. `for`	  
for  
Loops over a block of with conditions specified in the beginning.  
`*for (initialization condition; testing condition;increment/decrement)  
{  
    statement(s)  
}`*
2. `while`	  
Entry control loop which executes after checking the condition.	`*while (boolean condition)
{
    loop statements…
}`*
3. `do-while`	  
Exit Control Loop which executes once before checking the condition.  
`*do  
{  
    statements..  
    }  
    while (condition);`*

4. `for-in`	Another version of for loop to provide a simpler way to iterate.  
`*for (variableName in Object)  
{  
    statement(s)  
    }`*

```javascript
// Illustration of for loop
let x;

// for loop begins when x=2
// and runs till x <=4
for (x = 2; x <= 4; x++) {
    console.log("Value of x:" + x);
}

// Illustration of for..in loop
// creating an Object
let languages = {
    first: "C",
    second: "Java",
    third: "Python",
    fourth: "PHP",
    fifth: "JavaScript",
};

// Iterate through every property of 
// the object languages and print all
// of them using for..in loops
for (itr in languages) {
    console.log(languages[itr]);
}

// Illustration of while loop
let y = 1;

// Exit when x becomes greater than 4
while (y <= 4) {
    console.log("Value of y:" + y);

    // Increment the value of y for
    // next iteration
    x++;
}

// Illustration of do-while loop
let z = 21;

do {

    // The line while be printer even if 
    // the condition is false
    console.log("Value of z:" + z);

    z++;
} while (z < 20);

```

## If-else
If-else is used in JavaScript to execute a block of codes conditionally.
```javascript
if ( condition ) {
   // Executes this block if
   // condition is true
}
else {
   // Executes this block if
   // condition is false
}


// JavaScript program to illustrate if-else statement
const i = 10;

if (i < 15)
    console.log("Value of i is less than 10");
else
    console.log("Value of i is greater than 10");

```

## Strings
1. `concat()`	Used for concatenating multiple strings into a single string.
2. `match()`	Used for finding matche of a string against a provided pattern.
3. `replace()`	Used for finding and replacing a given text in string.
4. `substr()`	Used to extract length characters from a given string.
5. `slice()`	Used for extracting an area of the string and returs it
6. `lastIndexOf()`	Used to return the index (position) of the last occurrence of a specified value.
7. `charAt()`	Used for returning the character at a particular index of a string
8. `valueOf()`	Used for returning the primitive value of a string object.
9. `split()`	Used for splitting a string object into an array of strings.
10. `toUpperCase()`	Used for converting strings to upper case.
11. `toLoweCase()`	Used for converting strings to lower case.

```javascript
let mcu = 'MCU ';
let marvel = 'stands-for-MarvelCinematicUniverse';

// Print the string as it is
console.log(mcu);
console.log(marvel);

// concat() method
console.log(mcu.concat(marvel));

// match() method
console.log(marvel.match(/arv/));

// charAt() method
console.log(marvel.charAt(5));

// valueOf() method
console.log(marvel.valueOf());

// lastIndexOf() method
console.log(marvel.lastIndexOf('Cinematic'));

// substr() method
console.log(marvel.substr(6));

// indexOf() method
console.log(mcu.indexOf('M'));

// replace() method
console.log(mcu.replace('CU', 'cu'));

// slice() method
console.log(marvel.slice(2, 8));

// split() method
console.log(marvel.split('-'));

// toUpperCase method
console.log(marvel.toUpperCase(marvel));

// toLowerCase method
console.log(marvel.toLowerCase(marvel));

```

## Regular Expressions
A regular expression is a sequence of characters that forms a search pattern. The search pattern can be used for text search and text to replace operations.

Syntax:  
/pattern/modifiers;  

You can also use regEx() to create regular expression in javascript: 

`const regex1 = /^ab/;`   
`const regex2 = new Regexp('/^ab/');`

#### Regular Expression Modifiers:

1. `[abc]`	Find any of the character inside the brackets
2. `[0-9]`	Find any of the digits between the brackets 0 to 9
3. `(x/y)`	Find any of the alternatives between x or y separated with |

#### Regular Expression Patterns:
1.   `.`	Used for finding a single character, except newline or line terminator
2.   `\d`	Used to find a digit.
3.   `\s`	Used to find a whitespace character
4.   `\uxxxx`	Used to find the Unicode character specified by the hexadecimal number

## Quantifiers:
They provide the minimum number of instances of a character, group, or character class in the input required to find a match.

1. `n+`	Used to match any string that contains at least one n
2. `n*`	Used to match any string that contains zero or more occurrences of n
3. `n?`	Used to matches any string that contains zero or one occurrences of n
4. `n{x}`	Matches strings that contain a sequence of X n’s
5. `^n`	Matches strings with n in the first place

```javascript
// Program to validate the email address
function validateEmail(email) {

    // Regex pattern for email
    const re = /\S+@\S+\.\S+/g;

    // Check if the email is valid
    let result = re.test(email);

    if (result) {
        console.log("The email is valid.");
    } else {
        console.log("The email is not valid.");
    }
}

// Input Email Id
let email = "abc@gmail.com"
validateEmail(email);

email = "abc#$#@45com"
validateEmail(email);

```

## Data Transformation

1. `map()`	Iterates over an array and calls function on every element of array.	 
**array.map(function(currentValue, index, arr), thisValue)** 
2. `filter()`	Create a new array from a given array after applying a condition. 
**array.filter(callback(element, index, arr),
thisValue)**
3. `reduce()`	Reduces the array to single value using a function  
**array.reduce( function(total, currentValue, currentIndex, arr),
initialValue )**

```javascript
const num = [16, 25];

/* Using JS map() Method */
console.log(num.map(Math.sqrt));

const ages = [19, 37, 16, 42];

/* Using JS filter() Method */
console.log(ages.filter(checkAdult));

function checkAdult(age) {
    return age >= 18;
}

/* Using JS reduce() Method */
const numbers = [165, 84, 35];
console.log(numbers.reduce(myFunc));

function myFunc(total, num) {
    return total - num;
}

```

## Date objects
    new Date()
    new Date(milliseconds)
    new Date(dataString)
    new Date(year, month, date, hour, minute, second, millisecond)

1. `getDate()`	Used to return the month’s day as a number (1-31)
2. `getTime()`	Used to get the milliseconds since January 1, 1970
3. `getMinutes()`	Returns the current minute (0-59)
4. `getFullYear()`	Returns the current year as a four-digit value (yyyy)
5. `getDay()`	Returns a number representing the weekday (0-6) to
6. `parse()`	Returns the number of milliseconds since January 1, 1970
7. `setDate()`	Returns the current date as a number (1-31)
8. `setTime()`	Sets the time (milliseconds since January 1, 1970)  

```javascript
// Here a date has been assigned by creating a date obj
let DateObj = new Date("October 13, 1996 05:35:32");

// getDate()
let A = DateObj.getDate();

// Printing date of the month
console.log(A);

// getTime()
let B = DateObj.getTime();

// Printing time in milliseconds.
console.log(B);

// getMinutes()
let minutes = DateObj.getMinutes();

// Printing minute.
console.log(minutes);

// getFullYear()
let C = DateObj.getFullYear();

// Printing year
console.log(C);

// getDay()
let Day = DateObj.getDay();

// Printing day of the week
console.log("Number of Day: " + Day);

// setDate
DateObj.setDate(15);

let D = DateObj.getDate();

// Printing new date of the month
console.log(D);

// parse(), taking wrong date string as input.
let date = "February 48, 2018 12:30 PM";

// calling parse function.
let msec = Date.parse(date);
console.log(msec);

```

## DOM

1. `appendChild()`	Adds a new child node as the last child node.
2. `cloneNode()`	Duplicates an HTML element.
3. `hasAttributes()`	Returns true If an element has any attributes otherwise,returns false.
4. `removeChild()`	Removes a child node from an element using the Child() method.
5. `getAttribute()`	Returns the value of an element node’s provided attribute.
6. `getElemetsByTagName()`	Returns a list of all child elements.
7. `isEqualNode()`	Determines whether two elements are same.


**Example**

```javascript
<!DOCTYPE html>
<html>

<head>
    /* CSS is used to make the output looks good */
    <style>
        #sudo {
            border: 1px solid green;
            background-color: green;
            margin-bottom: 10px;
            color: white;
            font-weight: bold;
        }

        h1,
        h2 {
            text-align: center;
            color: green;
            font-weight: bold;
        }
    </style>
</head>

<body>
    <h1>GeeksforGeeks</h1>
    <h2>DOM appendChild() Method</h2>
    <div id="sudo">
        The Good Website is learning for developing is-
    </div>
    <button onclick="geeks()">Submit</button>
    <br />
    <div style="border: 3px solid green">
        <h1>GeeksforGeeks</h1>
        <h2>A developer portal for geeks</h2>
    </div>
    <h2>DOM cloneNode() Method</h2>
    <button onclick="nClone()">
        Click here to clone the above elements.
    </button>
    <br />
    <h2>DOM hasAttributes() Method</h2>
    <p id="gfg">
        Click on the button to check if that
        body element has any attributes
    </p>
    <button type="button" onclick="hasAttr()">
        Submit
    </button>
    <br />
    <h2>DOM removeChild() Method</h2>
    <p>Sorting Algorithm</p>
    <ul id="listitem">
        <li>Insertion sort</li>
        <li>Merge sort</li>
        <li>Quick sort</li>
    </ul>
    <button onclick="Geeks()">
        Click Here!
    </button>
    <br />
    <h2>DOM getAttribute() Method</h2>
    <br />
    <button id="button" onclick="getAttr()">
        Submit
    </button>
    <p id="gfg1"></p>
    <br />
    <h2>DOM getElementsByTagName()</h2>
    <p>A computer science portal for geeks.</p>
    <button onclick="getElememt()">
        Try it
    </button>
    <h3>DOM isEqualNode() method .</h3>
    <!-- 3 div elements-->
    <div>GeeksforGeeks</div>
    <div>GfG</div>
    <div>GeeksforGeeks</div>
    <button onclick="isequal()">
        Check
    </button>
    <p id="result"></p>
    <script>
        function geeks() {
            var node = document.createElement("P");
            var t = document.createTextNode("GeeksforGeeks");
            node.appendChild(t);
            document.getElementById("sudo").appendChild(node);
        }
        function nClone() {
            // Accessing div attribute using a variable geek
            var geek = document.getElementsByTagName("DIV")[0];

            // Cloning geek variable into a variable named clone
            var clone = geek.cloneNode(true);

            // Adding our clone variable to end of the document
            document.body.appendChild(clone);
        }
        function hasAttr() {
            var s = document.body.hasAttributes();
            document.getElementById("gfg").innerHTML = s;
        }

        function Geeks() {
            var doc = document.getElementById("listitem");
            doc.removeChild(doc.childNodes[0]);
        }

        /* Using getElementById */
        function getAttr() {
            var rk = document.getElementById("button").getAttribute("onClick");
            document.getElementById("gfg1").innerHTML = rk;
        }

        /* Using getElementsByTagName */
        function getElement() {
            var doc = document.getElementsByTagName("p");
            doc[0].style.background = "green";
            doc[0].style.color = "white";
        }

        /* Cheacking the equality */
        function isequal() {
            var out = document.getElementById("result");
            var divele = document.getElementsByTagName("div");
            out.innerHTML +=
                "element 1 equals element 1: " +
                divele[0].isEqualNode(divele[0]) +
                "<br/>";
            out.innerHTML +=
                "element 1 equals element 2: " +
                divele[0].isEqualNode(divele[1]) +
                "<br/>";
            out.innerHTML +=
                "element 1 equals element 3: " +
                divele[0].isEqualNode(divele[2]) +
                "<br/>";
        }
    </script>
</body>

</html>

```

## Numbers and Math

1. `valueOf()`	Returns a number in its original form.
2. `toString()`	Returns string representation of an integer.
3. `toFixed()`	Returns a number’s string with a specified number of decimals.
4. `toPricision()`	Converts a number to a string of a specified length.
5. `toExponential()`	Returns a rounded number written in exponential notation.
6. `max(x,y,z…n)`	Returns the highest-valued number
7. `min(x,y,z…n)`	Returns the lowest-valued number
8. `exp(x)`	Returns x’s exponential value.
9. `log(x)`	Returns the natural logarithm (base E) of x.
10. `sqrt(x)`	Returns x’s square root value.
11. `pow(x,y)`	Returns the value of x to the power of y
12. `round(x)`	Rounds the value of x to the nearest integer
13. `sin(x)`	Finds the sine value of x(x is in radians).
14. `tan(x)`	Finds the angle’s(x) tangent value.

```html
<script type="text/javascript">
    var num = 213;
    var num1 = 213.3456711;

    // JS valueof() Method
    console.log("Output : " + num.valueOf());

    // JS tostring() Method
    console.log("Output : " + num.toString(2));

    // JS tofixed() Method
    console.log("Output : " + num1.toString(2));

    // JS topricision() Method
    console.log("Output : " + num1.toPrecision(3));

    // JS toexponential() Method
    console.log("Output : " + num1.toExponential(4));
</script>



 <!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++ -->


<script>
    document.getElementById("GFG").innerHTML =
        "Math.LN10: " + Math.LN10 + "<br>" +
        "Math.LOG2E: " + Math.LOG2E + "<br>" +
        "Math.Log10E: " + Math.LOG10E + "<br>" +
        "Math.SQRT2: " + Math.SQRT2 + "<br>" +
        "Math.SQRT1_2: " + Math.SQRT1_2 + "<br>" +
        "Math.LN2: " + Math.LN2 + "<br>" +
        "Math.E: " + Math.E + "<br>" +
        "Math.round: " + Math.round(5.8) + "<br>" +
        "Math.PI: " + Math.PI + "<br>" +
        "
        < p > <b>Math.sin(90 * Math.PI / 180):</b> " +
    Math.sin(90 * Math.PI / 180) + "</p>
    " +
    "
        < p > <b>Math.tan(90 * Math.PI / 180):</b> " +
    Math.tan(90 * Math.PI / 180) + "</p>
    " +
    "
        < p > <b>Math.max(0, 150, 30, 20, -8, -200):</b> " +
    Math.max(0, 150, 30, 20, -8, -200) + "</p>
    " +
    "
        < p > <b>Math.min(0, 150, 30, 20, -8, -200):</b> " +
    Math.min(0, 150, 30, 20, -8, -200) + "</p>
    " +
    "
        < p > <b>Math.pow(3,4):</b> " + Math.pow(3, 4) + "</p >
            ";
</script>


```

## Events
1. `onclick()`	Triggers an event when an element is clicked.
2. `onkeyup()`	Executes instructions whenever a key is released after pressing.
3. `onmouseover()`	Triggers an event when mouse pointer is hovered over an element
4. `onmouseout()`	Triggers an event when mouse pointer is moved away from an element.
5. `onchange()`	Detects the change in value of any element listing to this event.
6. `onload()`	Evokes an event when an element is completely loaded.
7. `onfocus()`	Triggers when an aspect is brought into focus.
8. `onblur()`	Evoked an event when an element loses focus.
9. `onsubmit()`	Evokes an event when a form is submitted
10. `ondrag()`	Invokes an event when an element is dragged.
11. `oninput()`	Triggers when an input field gets any value.

## Error

1. `try`	Tests a block of code to check for errors.
2. `catch`	Handles the error if any are present.
3. `throw`	Allows construction of new errors.
4. `finally`	Executes code after try and catch.

```html
<!DOCTYPE html>
<html>

<body>
    <h2>
        JavaScript throw try catch finally keywords
    </h2>
    <p>Please enter a number:</p>
    <input id="demo" type="text" />
    <button type="button" onclick="myFunction()">
        Test Input
    </button>
    <p id="p01"></p>
    <script>
        function myFunction() {
            const message = document.getElementById("p01");
            message.innerHTML = "";
            let x = document.getElementById("demo").value;

            /* Using try.. catch.. with conditions*/
            try {
                if (x == "") throw "is empty";
                if (isNaN(x)) throw "is not a number";
                x = Number(x);
                if (x > 20) throw "is too high";
                if (x <= 20) throw "is too low";
            } catch (err) {
                message.innerHTML = "Input " + err;
            } finally {
                document.getElementById("demo").value = "";
            }
        }
    </script>
</body>

</html>

```

## Windows Property

