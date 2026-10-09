// create elements
const catBorder = document.createElement("div");
const catContainer = document.createElement("div");
const catNameParagraph = document.createElement("p");
const madeBy = document.createElement("p");
const elementContainer = document.createElement("div");
const cat = document.createElement("img");
const buttons = document.createElement("div");
const throwTomatoButton = document.createElement("button");
const lookButton = document.createElement("button");
const textButton = document.createElement("button");
const textBox = document.createElement("p");
const fishButton = document.createElement("button");
var audio = new Audio('images/meow.mp3');
var audio2 = new Audio('images/tomato.mp3');

// add them into the HTML document
document.body.appendChild(catBorder);
document.body.appendChild(madeBy);
catBorder.appendChild(catContainer);
catBorder.appendChild(buttons);
catBorder.appendChild(catNameParagraph);
buttons.appendChild(throwTomatoButton);
buttons.appendChild(lookButton);
buttons.appendChild(textButton);
buttons.appendChild(fishButton);
catContainer.appendChild(elementContainer);
elementContainer.appendChild(textBox);
elementContainer.appendChild(cat);

cat.src = "images/cat.png"; // set image to cat 

// IDs for style (in CSS)
catBorder.setAttribute("id", "cat-border");
elementContainer.setAttribute("id", "element-container");
catContainer.setAttribute("id", "cat-container");
buttons.setAttribute("id", "buttons");
textBox.setAttribute("id", "text-box");
madeBy.setAttribute("id", "made-by");

// add functions to elements for hover and click animations
cat.setAttribute("onclick", "catHeart();");
lookButton.setAttribute("onclick", "look();");
fishButton.setAttribute("onclick", "fish();");
textBox.style.display = "none";
throwTomatoButton.setAttribute("onclick", "throwTomato();");
textButton.setAttribute("onclick", "askForAdvice();");

// add text content and background image to content
catNameParagraph.textContent = "cat";
throwTomatoButton.textContent = "🍅";
throwTomatoButton.setAttribute("title", `THROW TOMATO`);
lookButton.textContent = "👀";
lookButton.setAttribute("title", "cat LOOKS");
textButton.textContent = "💬";
textButton.setAttribute("title", `ask it 4 advice`);
fishButton.textContent = "🐟";
fishButton.setAttribute("title", `give fish`);
textBox.textContent = " ";
elementContainer.style.background = "url('images/dolphins.jpg') no-repeat center / cover";
madeBy.textContent = "made for hack club tagless!";

// allow user to name cat
function nameTheCat() {
  let catName = prompt("name da cat", "cat");

  if (catName != null) {
    catNameParagraph.textContent = catName;
  }
}

// play meow and show different image when clicked on
function catHeart() {
  cat.src = "images/cat-love.png";
  audio.play();
  setTimeout(() => {
    cat.src = "images/cat.png";
  }, 5000)
}

// have cat switch between two images when eyes button clicked
function look() {
  cat.src = "images/catlook1.png";
  setTimeout(() => {
    cat.src = "images/catlook2.png";
  }, 1000);
  setTimeout(() => {
    cat.src = "images/cat.png";
  }, 2500);
}

// feed cat by switching image
function fish() {
  cat.src = "images/cat-food.png";
  setTimeout(() => {
    cat.src = "images/cat.png";
  }, 2500)
}

var timerId;

function throwTomato() {
  if (!(timerId == null)) {
    clearTimeout(timerId);
  }
  timerId = setTimeout(function () {
    cat.src = "images/cat-tomato.gif";
    audio2.play();
    setTimeout(() => {
      cat.src = "images/cat.png";
    }, 2500)
  }, 400);
}

function askForAdvice() {
  let advice = ["meow mewo mowe", "tagless best YSWS", "mrrp", "GIVE ME FISH", "hugs", "vroom vroom", "low battery", "this website cost me 1 billion dollars", "and the universe said that everything you need is within you", "and the universe said you are stronger than you know", "and the universe said the light you seek is within you", "ooooOOOOOooo", "mery crismas"];

  let i = Math.floor(Math.random() * advice.length);
  let text = advice[i];
  textBox.style.display = "block";
  textBox.textContent = text;
  setTimeout(() => {
    textBox.style.display = "none"
  }, 5000)
}

// run name cat function on page load
nameTheCat();

