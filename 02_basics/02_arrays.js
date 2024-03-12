//Arrays-2

const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes) ///// creating existing array

// console.log(marvel_heroes);
// console.log(dc_heroes);

const allMerge = marvel_heroes.concat(dc_heroes) //// creating new array
// console.log(allMerge);

//using spread --------- ek glass ko neeche gira aur bikhar gya jaise 
//(...marvel_heroes, ...dc_heroes) every character individual ho gaye hai
//only two things are concatinate in concat method but spread has many things to add
//like example:

const all_heroes = [...marvel_heroes, ...dc_heroes]

// console.log(all_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7 , [4, 5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Abhay"))
// console.log(Array.from("Abhay"))
// console.log(Array.from({name:"Abhay"})) //important for interviwer

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); ///////[ 100, 200, 300 ]
console.log(Array.call(score1, score2, score3)); ///////[ 200, 300 ]
console.log(Array.call(score1, score2, score3));