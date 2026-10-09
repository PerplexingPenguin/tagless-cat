
const catBorder = document.createElement("div");
const catContainer = document.createElement("div");
const catName = document.createElement("p");
const madeBy = document.createElement("p");
const elementContainer = document.createElement("div");
const cat = document.createElement("img");
const star = document.createElement("img");

document.body.appendChild(catBorder);
document.body.appendChild(madeBy);
catBorder.appendChild(catContainer);
catBorder.appendChild(catName);
catContainer.appendChild(elementContainer);
elementContainer.appendChild(star);
elementContainer.appendChild(cat);

cat.src = "images/black_cat_vector_svg.jpg";
star.src = "images/gold_star_large_svg.jpg";

catBorder.setAttribute("id", "cat-border");
elementContainer.setAttribute("id", "element-container");
madeBy.setAttribute("id", "made-by");

catName.textContent = "shake me around";
madeBy.textContent = "made by sylveon for hack club tagless :)";