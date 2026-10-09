
const catBorder = document.createElement("div");
const catContainer = document.createElement("div");
const catNameParagraph = document.createElement("p");
const madeBy = document.createElement("p");
const elementContainer = document.createElement("div");
const cat = document.createElement("img");
var audio = new Audio('images/meow.mp3');

document.body.appendChild(catBorder);
document.body.appendChild(madeBy);
catBorder.appendChild(catContainer);
catBorder.appendChild(catNameParagraph);
catContainer.appendChild(elementContainer);
elementContainer.appendChild(cat);

cat.src = "images/cat.png";

catBorder.setAttribute("id", "cat-border");
elementContainer.setAttribute("id", "element-container");
catContainer.setAttribute("id", "cat-container");
madeBy.setAttribute("id", "made-by");
cat.setAttribute("onmouseover", "hover();");
cat.setAttribute("onmouseout", "unHover();");
cat.setAttribute("onclick", "onClick();");


catNameParagraph.textContent = "my name is ____";

madeBy.textContent = "made by sylveon for hack club tagless :)";

function nameTheCat() {
  let catName = prompt("name da cat", "cat");

  if (catName != null) {
    catNameParagraph.textContent = "my name is " + catName;
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

