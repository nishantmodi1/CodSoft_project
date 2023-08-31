const toggle = document.querySelector(".nav__wrapper__toggle");
const ul = document.querySelector(".nav__wrapper__ul");
// console.log(toggle);
// add click event on toggle
toggle.addEventListener("click", () => {
  // alert("Hello toggle");
  ul.classList.toggle("nav__active");
});

// name typewrite effect
const nameElement = document.querySelector(".header__data__contents__heading");
const nameText = "Nishant Modi";
let start = 0;

//// console.log(nameText.charAt(0));

const typewrite = () => {
  if (start < nameText.length) {
    // console.log(nameText.charAt(start));
    nameElement.innerHTML += nameText.charAt(start);
    start++;
    setTimeout(typewrite, 300);
  }
};
typewrite();

//open close modal
const modelBtn = document.querySelector(".model-btn");
const model = document.querySelector(".model");
const modelClose = document.querySelector(".model__wrapper__close");

//open model
modelBtn.addEventListener("click", () => {
  model.style.display = "flex";
});

// close model
modelClose.addEventListener("click", () => {
  model.style.display = "none";
});

// get current year

const year = document.querySelector(".yrs");
year.innerHTML = new Date().getFullYear();
