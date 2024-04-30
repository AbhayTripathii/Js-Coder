# 01_basics_notes
 
### (1) prefer not to use var
because var is use for block scope and funtional work




### (2) typeof uses
```javascript
console.log(typeof score); //use of typeof
console.log(typeof(score)); // use of typeof but also use () methods format
```


### (3)Conversion output NOTES

```javascript

40 => number
null => object
undefined => undefined
True => Boolean




//+++++++++++++ False OR True +++++++++++++++

console.log(2 > 3); // false
console.log(2 <= 3); //true
console.log(2 >= 3); //false
console.log(2 < 3); //true
console.log(2 != 3); //true

//++++++++++++ Comparison on predictible ++++++

console.log(null = 0); //Error
console.log(null == 0); //false
console.log(null != 0); //true
console.log(null >= 0); //true
console.log(null <= 0); //true

//+++++++++++++ undefined +++++++++++++++++++++

console.log(undefined = 0); //0
console.log(undefined == 0); //false
console.log(undefined != 0); //true
console.log(undefined >= 0); //false
console.log(undefined <= 0); //false
```

### (4) Primitive types
7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

### (5) Reference types (Non primitive)
Array, Objects, Functions


### (6) object define

```javascript
const balance = new Number(100)//new object defined karne ke liye
console.log(balance.toFixed(1));  ///////always be used in ecommerce like 100.235698===100.23only

```

### (7) Date print

```javascript
let timeStamp = Date.now();
console.log(timeStamp); //show milliseconds from 1 january 1970 to today
console.log(myCreatedDate.getTime()); //show milliseconds from 1 january 1970 to 03-11-2024
```

# LOOPS_notes

### (1) For creating table

```javascript

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`)
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and outer loop ${i}`) 
        console.log(i + ' * ' + j + ' = ' + i * j)
    }
    
}
```

### (2) don't use loops without ++ with index
like this  for (let i = 0; i <= 10; i)
that is consumes more memory in your system 
many time your system was hanged up


### (3) break and continue 
break get stopped every thing,
```javascript
for (let index = 1; index <= 20; index++){
    if( index == 5){
        console.log(`Detected 5`);
        break
    }
    console.log(`value of i is ${index}`);
   
}
```
continue is skip the process one time then run again 
```javascript
for (let index = 1; index <= 20; index++){
    if( index == 5){
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of i is ${index}`);
   
}
```

### (4) while Array

```javascript
let myArray = ["cap","iron","Thor"]

let arr = 0 // for increment decrement
while (arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr++    
}
```

### (5) Do While loop
first he done work then initialize the condition

```javascript
let score = 1
do {
    console.log(`Score is ${score}`)
    score++
} while (score <= 10);


/// remove array in output like this 

for (const [key, value] of map) {
    console.log(key, ":-", value);
}
```

forEach loops has many parameters like arr, index , item

### (6) filter loops 
if you write curly scopes within then you write the return keyword

```javascript
const newNums = myNums.filter( (num) => {
    return num > 4
})
```

### (7) map
if you write curly scopes within then you write the return keyword
const newNums = myNumbers.map( (num) => { return num + 10})

```javascript
const map = new Map()

map.set('IN', "India")  
map.set('USA', "United states of America")  
map.set('FR', "France")  
map.set('IN', "India")  

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-", value);
    
}


const myObject = {
    game1: 'BGMI',
    game2: 'fortnite'
}

for (const key of myObject) {
    console.log(key)    
}
```

### (8) chaining

```javascript
const newNums = myNumbers
                .map( (num) => num * 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)
                /.filter( (num) => { return num >= 40})
```


# DOM_notes

### (1) querySelector

```javascript
document.querySelector('ul')
const myUl = document.querySelector('ul')
myUl.querySelector('li')
const changeStyle = myUl.querySelector('li')
changeStyle.style.backgroundColor="white"
changeStyle.style.color="white"
changeStyle.style.color="black"
changeStyle.innerText="black"
changeStyle.style.padding="20px"
```


### (2) first element selector 

```javascript
const temList = document.querySelectorAll('li')

temList[0].style.color= 'red' // change in red color on 1 element 
```




when system give nodeList you should try 
like this: temList[0].style.color= 'red'


### (3) From forEach 

jyada se jyada nodeList me forEach hi use karna 
or agar map use karna hai hai to nodeList ko convert karo phle array me then try
```javascript
temList.forEach(function (l) {
     l.style.backgroundColor = "red"
})

together
1) select       document.querySelectorAll('h2')
2) stored       const allH2 = document.querySelectorAll('h2')
3) changes      allH2.forEach(function (h2) {
                    h2.style.fontSize = '40px'
                    h2.style.padding = '10px'
                    h2.style.fontWeight = '800'
                    h2.innerHTML = 'Abhay'
                })
```




### (4)convert the temClass into Array 

#### temClass like this
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
Array.from(temClass)

#### stored the value
const myConvertedArray = Array.from(temClass)


### (5) Targeting
```javascript
//target child element
console.log(parent.firstElementChild);//target first element
console.log(parent.lastElementChild); //target last element


//target parent element
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);
```