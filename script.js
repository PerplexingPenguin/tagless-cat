
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

cat.src = "images/cat.png";

catBorder.setAttribute("id", "cat-border");
elementContainer.setAttribute("id", "element-container");
catContainer.setAttribute("id", "cat-container");
buttons.setAttribute("id", "buttons");
madeBy.setAttribute("id", "made-by");
cat.setAttribute("onmouseover", "hover();");
cat.setAttribute("onmouseout", "unHover();");
cat.setAttribute("onclick", "onClick();");


catNameParagraph.textContent = "Name: ";
throwTomatoButton.textContent = "🍅";
lookButton.textContent = "👀";
pictureButton.textContent = "🖼️";
elementContainer.style.background = "url('images/dolphins.jpg') no-repeat center / cover";


madeBy.textContent = "made by sylveon for hack club tagless :)";

function nameTheCat() {
  let catName = prompt("name da cat", "cat");

  if (catName != null) {
    catNameParagraph.textContent = "Name: " + catName;
  }
}

function hover() {
  cat.src = "images/cattongue.png";
}

function unHover() {
  cat.src = "images/cat.png";
}

function onClick() {
  cat.src = "images/cat-love.png";
  audio.play();
  setTimeout(() => {
    cat.src = "images/cat.png";
  }, 5000)
}




nameTheCat();

