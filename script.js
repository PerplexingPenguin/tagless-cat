
const catBorder = document.createElement("div");
const catContainer = document.createElement("div");
const catName = document.createElement("p");
const madeBy = document.createElement("p");

document.body.appendChild(catBorder);
document.body.appendChild(madeBy);
catBorder.appendChild(catContainer);
catBorder.appendChild(catName);

catBorder.setAttribute("id", "cat-border");
madeBy.setAttribute("id", "made-by");

catName.textContent = "shake me around";
madeBy.textContent = "made by sylveon for hack club tagless :)";