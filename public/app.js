// var app = function() {
//
//     let catUl = document.createElement("ul");
//     catUl.classList.add("cat");
//
//     let nameLi = document.createElement("li");
//     nameLi.innerText = 'Name: Tiger';
//
//     let foodLi = document.createElement("li");
//     foodLi.innerText = 'Favourite Food: Mind Alan Cat Food';
//
//     let imageLi = document.createElement("li");
//     imageLi.innerHTML = 'img width="500" src="https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"';
//
//     catUl.appendChild(nameLi);
//
//     catUl.appendChild(foodLi);
//
//     catUl.appendChild(imageLi);
//
//     let cats = document.querySelector("#cats");
//     cats.appendChild(catUl);
//
// ;}

var createCatUl = function(){
  let catUl = document.createElement("ul");
  catUl.classList.add("cat");
  return catUl;
}

var createNameLi = function(nameText){
  let nameLi = document.createElement("li");
  nameLi.innerText = nameText;
  return nameLi;
};

var createFoodLi = function(foodText){
  let foodLi = document.createElement("li");
  foodLi.innerText = foodText;
  return foodLi;
};

var createImageLi = function(imageText){
  let imageLi = document.createElement("li");
  imageLi.innerText = imageText;
  return imageLi;
};

var appendElements = function(catUl, nameLi, foodLi, imageLi){
  catUl.appendChild(nameLi);
  catUl.appendChild(foodLi);
  catUl.appendChild(imageLi);
  let cats = document.querySelector("#cats");
  cats.appendChild(catUl);
};

var addCat = function(nameText, foodText, imageText) {
  var catUl = createCatUl();
  var nameText = createNameLi(nameText);
  var foodText = createFoodLi(foodText);
  var imageText = createImageLi(imageText);

  appendElements(catUl, nameText, foodText, imageText);
};

// const cats = document.getElementsByClassName("cats");
// cats[0].style.backgroundColor = "hotpink";

    // const cats = document.getElementsByTagName("ul");
    //
    // cats[0].style.backgroundColor = "hotpink";
    //
    // cats[0].style.display = "none";

window.onload = function(){
  addCat("Name: Boba", "Favourite food: Sock fluff", "www.image.com");
  addCat("Name: Barnaby", "Favourite food: Tuna", "www.image.com");
  addCat("Name: Max", "Favourite food: Whiskas Temptations", "www.image.com");
  addCat("Name: Fluffy the Destroyer of Worlds", "Favourite Food: Dog souls", "www.image.com");
};
