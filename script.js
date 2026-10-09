
const catBorder = document.createElement("div");
const catContainer = document.createElement("div");
const catName = document.createElement("p");
const madeBy = document.createElement("p");
const elementContainer = document.createElement("div");
const cat = document.createElement("img");;

document.body.appendChild(catBorder);
document.body.appendChild(madeBy);
catBorder.appendChild(catContainer);
catBorder.appendChild(catName);
catContainer.appendChild(elementContainer);
elementContainer.appendChild(cat);

cat.src = "images/black_cat_vector_svg.jpg";

catBorder.setAttribute("id", "cat-border");
elementContainer.setAttribute("id", "element-container");
catContainer.setAttribute("id", "cat-container");
madeBy.setAttribute("id", "made-by");

catName.textContent = "my name is mrrp meow mrp";
madeBy.textContent = "made by sylveon for hack club tagless :)";