# Projects related to DOM

## project link (My stackblitz platform)
[Click here](https://stackblitz.com/edit/dom-project-7h4u4z?file=index.html)

# 6 - 10 Project code (Abhay Tripathi)

# Project 6 Unlimited colors
#### HTML code
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
  </head>
  <body style="background-color: #212121; color: #fff">
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.instagram.com/abhay_coder/"
        >Instagram</a
      >
    </nav>

    <h1>Start should change the Background color every second</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
    <script src="abhay.js"></script>
  </body>
</html>

```
#### JAVASCRIPT code
```javascript
// generate a random colors

const randomColor = function(){
  const hex = "0123456789ABCDEF"

  let color = "#"
  for(let i=0; i < 6; i++){
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color;
};

let intervald
const startChangingColor = function (){ 
  if(!intervald){
    intervald = setInterval(changeBgColor, 1000)
  }
  
  function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
  }
};


const stopChangingColor = function (){ 
  clearInterval(intervald);
  intervald = null;
};




document.querySelector('#start').addEventListener('click', startChangingColor)


document.querySelector('#stop').addEventListener('click', stopChangingColor)
```


## Project 8 Typer Library
#### HTML code
```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Auto Text</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <p>
      <span class="js">JavaScript</span> Is 
      <span class="typed-text"></span>
      <span class="cursor">&nbsp;</span>
    </p>

    <script src="./chaiaurcode.js"></script>
  </body>
</html>
```

#### CSS
```css
<!--   css code    -->
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: sans-serif;
  background: #000;
  color: #fff;
}

p {
  font-size: 3rem;
}

.js {
  color: #fdfdfc;
}

.typed-text {
  color: #de8512;
}

.cursor {
  background: #dbe912;
}
```
#### Javascript
```javascript
const Typer = {
  typedTextSpan: document.querySelector('.typed-text'),
  cursor: document.querySelector('.cursor'),
  words: ['Love', 'Jhakaas', 'mast', 'dhinchak', 'Weird'],
  wordIndex: 0,
  charIndex: 0,
  isTyping: true,

  
  type: function() {
    if (this.isTyping) {
      if (this.charIndex < this.words[this.wordIndex].length) {
        this.typedTextSpan.textContent += this.words[this.  wordIndex].charAt(this.charIndex);
        this.charIndex++;
        setTimeout(() => this.type(), 100); // Adjust typing speed   here
      } else {
        // Start erasing after typing is complete
        setTimeout(() => this.erase(), 1500); // Adjust delay   before erasing here
      }
    }
  },
  
    erase: function() {
      if (this.isTyping) {
        if (this.charIndex > 0) {
          this.typedTextSpan.textContent = this.words[this.  wordIndex].substring(0, this.charIndex - 1);
          this.charIndex--;
          setTimeout(() => this.erase(), 50); // Adjust erasing   speed here
        } else {
          // Move to the next word or loop back to the beginning
          this.wordIndex = (this.wordIndex + 1) % this.words.  length;
          setTimeout(() => this.type(), 500); // Adjust delay   before typing next word here
        }
      }
    },
  
    startTyping: function() {
      this.isTyping = true;
      this.type();
    },
  
    stopTyping: function() {
      this.isTyping = false;
    }
};

// Start typing
Typer.startTyping();

// +++++++++UPPER++++++++AND++++++++++++BELOW++++++++++++same code but different

const Typer = {
  typedTextSpan: document.querySelector('.typed-text'),
  cursor: document.querySelector('.cursor'),
  words: ['Love', 'Jhakaas', 'mast', 'dhinchak', 'Weird', 'Awesome', 'logical ', 'confusion'],
  wordIndex: 0,
  charIndex: 0,

  type: function() {
    if (this.charIndex < this.words[this.wordIndex].length) {
      this.typedTextSpan.textContent += this.words[this.wordIndex].charAt(this.charIndex);
      this.charIndex++;
      setTimeout(() => this.type(), 100);
    } else {
      setTimeout(() => this.erase(), 1200);
    }
  },

  erase: function() {
    if (this.charIndex > 0) {
      this.typedTextSpan.textContent = this.words[this.wordIndex].substring(0, this.charIndex - 1);
      this.charIndex--;
      setTimeout(() => this.erase(), 50);
    } else {
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      setTimeout(() => this.type(), 500);
    }
  },

  startTyping: function() {
    this.type();
  }
};

Typer.startTyping();

```
### Summarry of project 8 (how it's work)
. This code creates a typewriter effect library called **`Typer`**. It displays text one word at a time, then erases it before moving on to the next word. Key points:

1. The `Typer` object stores the typed text span, cursor element, an array of words to type, and the current word and character indices.
2. The `type` function gradually types out the current word character by character until the entire word is displayed. It then triggers the `erase` function.
3. The `erase` function gradually erases the typed word character by character until it's completely erased. It then moves to the next word and starts typing again.
4. The `startTyping` function initiates the typing process.  

. Adjustments to typing speed, erasing speed, and delays between words can be made by modifying the `setTimeout` intervals within the `type` and `erase` functions. 


## Project 9 Mouse Circle
#### HTML
```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cursor</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="cursor"></div>
    <div class="container">
      <h1>Mouse Cursor Project</h1>
      <p>You can only manage people, not the time</p>
      <p>- Abhay Tripathi</p>
      <button>My Github</button>
    </div>

    <script src="abhay.js"></script>
  </body>
</html>

```
#### CSS
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@700&display=swap');

body {
  height: 100vh;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container {
  text-align: center;
  margin: 0 auto;
}

h1 {
  color: #fff;
  font-size: 4rem;
  font-family: 'Playfair Display SC', serif;
}

p {
  color: #fff;
  max-width: 700px;
  font-family: sans-serif;
  letter-spacing: 2px;
  line-height: 22px;
  margin-bottom: 40px;
}

button {
  padding: 0;
  margin: 0;
  border: transparent;
  background: transparent;
  color: #fff;
  border: 2px solid white;
  padding: 10px 20px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
}

/* JavaScript */
div.cursor {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 25px;
  height: 25px;
  background: yellow;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: cursor 6s infinite alternate;
}

```
#### Javascript
```javascript
const cursor = document.querySelector('.cursor');
// an array of 10 colors in hex value
const colors = [
  '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#99FF99',
  '#B34D4D',
];
// add circle to cursor and change it's color as cursor moves on the screen. Pick color from these array

  // Function to move cursor and change color
  function moveCursorAndChangeColor(event) {
    const x = event.clientX;
    const y = event.clientY;

    // Move cursor to the mouse position
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;

    // Change cursor color based on position
    const index = Math.floor(x / window.innerWidth * colors.length);
    cursor.style.backgroundColor = colors[index];
  }
  // Event listener for mouse movement
  document.addEventListener('mousemove', moveCursorAndChangeColor);

```

## Project 10 Emojis
#### HTML Code

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Random Emojies</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h4>
      As a user hover the mouse over emoji, get a new emoji. As the user moves
      away mouse turn it into gray-scale
    </h4>
    <div id="emoji">🤣</div>

    <script src="abhay.js"></script>
  </body>
</html>

```
#### CSS Code
```css
body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ccc;
}

#emoji {
  font-size: 10rem;
  filter: grayscale(1);
  transition-property: transfrom, filter;
  transition-duration: 200ms;
  cursor: pointer;
}

#emoji:hover {
  transform: scale(1.3);
  filter: grayscale(0);
}

```

#### JAVASCRIPT Code
```javascript
const btn = document.querySelector('#emoji');
const emojis = [
  '😆',
  '😅',
  '🤣',
  '😂',
  '😀',
  '🤑',
  '🤨',
  '🙂',
  '😊',
  '😗',
  '😛',
  '😏',
  '🤥',
  '😴',
  '🥺',
  '😧',
  '😇',
  '😳',
  '🙃',
  '🥴',
  '🧐',
  '🤨',
  '😒',
  '🤔',
  '🤭',
  '🥰',
  '🤐',
  '👀',
  '🤔',
  '🤪',
  '😬',
];


// Event listener for mouse enter
btn.addEventListener('mouseenter', function() {
  btn.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
});

// Event listener for mouse leave
btn.addEventListener('mouseleave', function() {
  btn.innerHTML = '🤣'; // Default emoji when mouse leaves
  // grayscale(); // Convert emoji to grayscale
});


```