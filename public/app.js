var app = function() {

    let catUl = document.createElement("ul");
    catUl.classList.add("cat");

    let nameLi = document.createElement("li");
    nameLi.innerText = 'Name: Tiger';

    let foodLi = document.createElement("li");
    foodLi.innerText = 'Favourite Food: Mind Alan Cat Food';

    let imageLi = document.createElement("li");
    imageLi.innerHTML = 'img width="500" src="https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"';

    catUl.appendChild(nameLi);

    catUl.appendChild(foodLi);

    catUl.appendChild(imageLi);

    let cats = document.querySelector("#cats");
    cats.appendChild(catUl);

    debugger;

;}

window.onload = app;
