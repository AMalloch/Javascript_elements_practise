var app = function() {

    let catUl = document.createElement("ul");
    catUl.classList.add("cat");

    let nameLi1 = document.createElement("li");
    nameLi1.innerText = 'Name: Tiger';

    let nameLi2 = document.createElement("li");
    nameLi2.innerText = 'Favourite Food: Mind Alan Cat Food';

    let nameLi3 = document.createElement("li");
    nameLi3.innerHTML = 'img width="500" src="https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"';

    debugger;

;}

window.onload = app;
