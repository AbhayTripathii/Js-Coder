const myObject = {
    js: 'javascipt',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}



const programming = ["js","rb","java","cpp"]

for (const key in programming) {
    // console.log(programming[key])    
}


const map = new Map()

map.set('IN', "India")  
map.set('USA', "United states of America")  
map.set('FR', "France")  
map.set('IN', "India")  

for (const key in map) {
    console.log(key)
}