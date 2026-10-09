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
const pictureButton = document.createElement("button");
var audio = new Audio('images/meow.mp3');

// add them into the HTML document
document.body.appendChild(catBorder);
document.body.appendChild(madeBy);
catBorder.appendChild(catContainer);
catBorder.appendChild(buttons);
catBorder.appendChild(catNameParagraph);
buttons.appendChild(throwTomatoButton);
buttons.appendChild(lookButton);
buttons.appendChild(pictureButton);
catContainer.appendChild(elementContainer);
elementContainer.appendChild(cat);

cat.src = "images/cat.png"; // set image to cat 

// IDs for style (in CSS)
catBorder.setAttribute("id", "cat-border");
elementContainer.setAttribute("id", "element-container");
catContainer.setAttribute("id", "cat-container");
buttons.setAttribute("id", "buttons");
madeBy.setAttribute("id", "made-by");

// add functions to elements for hover and click animations
cat.setAttribute("onmouseover", "hover();");
cat.setAttribute("onmouseout", "unHover();");
cat.setAttribute("onclick", "catHeart();");
lookButton.setAttribute("onclick", "look();");

// add text content and background image to content
catNameParagraph.textContent = "Name: ";
throwTomatoButton.textContent = "🍅";
lookButton.textContent = "👀";
pictureButton.textContent = "🖼️";
elementContainer.style.background = "url('images/dolphins.jpg') no-repeat center / cover";
madeBy.textContent = "made by sylveon for hack club tagless :)";

// allow user to name cat
function nameTheCat() {
  let catName = prompt("name da cat", "cat");

  if (catName != null) {
    catNameParagraph.textContent = "Name: " + catName;
  }
}

// hover to show different cat image
function hover() {
  cat.src = "images/cattongue.png";
}

// return to original image when no focus
function unHover() {
  cat.src = "images/cat.png";
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


// run name cat function on page load
nameTheCat();

