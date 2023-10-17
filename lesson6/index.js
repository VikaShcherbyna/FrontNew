// console.log("Hello, JS");
// let x = 4;
// word = "orange";
// const y = 7;
// console.log(word);
// console.log(y);
// word = 10;
// console.log(word);
// console.log("*******");

//DOM
const btnElement = document.getElementById("btn-bum");
console.log(btnElement); // проверка

const btnChangeColorElement = document.getElementById("btn-change-color");
console.log(btnChangeColorElement); // проверка
//для изменения свойств текста
const textElement = document.getElementById("text");
console.log(textElement); // проверка

//повесили на элемент слушатель событий
btnElement.addEventListener("click", () => {
  console.log("Boom-boom-boom");
});

btnChangeColorElement.addEventListener("click", () => {
  console.log("Нажали на кнопку изменить цвет");
  textElement.style.color = "green";
  //как поменять имя класса
  textElement.className = "green-text";
  //как поменять цыет кода
  textElement.style.backgroundColor = "lightgrey";
  textElement.style.padding = "10px";
  //id тоже можно поменять таким образом
});

// СИНИЙ квадрат ->Черный квадрат

// отловили кнопку на синий квадрат
const btnChangeColorSquareElement = document.getElementById(
  "btn-change-color-square"
);
console.log(btnChangeColorSquareElement); // проверка

// отловили div <div id="square">
const squareElement = document.getElementById("square");
console.log(squareElement); // проверка

btnChangeColorSquareElement.addEventListener("click", () => {
  if (squareElement.style.backgroundColor === "black") {
    //если квадрат черный то сделаем синим
    squareElement.style.backgroundColor = "blue";
    squareElement.innerText = "Синий квадрат";
    squareElement.style.color = "white";
  } else {
    // если был синий - сделаем черным
    squareElement.style.backgroundColor = "black";
    squareElement.innerText = "Черный квадрат";
    squareElement.style.color = "white";
  }
  squareElement.style.borderRadius = "10px";
});
//отловим кнопку
const btnDeleteSquareElement = document.getElementById("delete-square");
//добавим слушатель событий
btnDeleteSquareElement.addEventListener("click", () => {
  squareElement.remove();
});

//как создать новый узел, т.е новый элемент и прикрепить его у документу
const newElement = document.createElement("p"); // создали пустой элемент
newElement.innerText = "Кажется я начинаю понимать ДОМ";
newElement.id = "new-text";
newElement.style.fontSize = "25px";
// теперь когда мы создали новый элемент мы можем его прикрепить
//давайте сделаем для этого кнопку

const btnAdd = document.getElementById("add-text");
btnAdd.addEventListener("click", () => {
  console.log("Добавление"); //Для проверки
  // что бы прикрепить созданный узел к документу
  //  в данном случае к Body
  //document.body.appendChild(newElement); // КудаПрикрепляем.appendChild(что прикрепляем) т.е прикрепляем ребенка, добавляет после всех
  document.body.prepend(newElement); // добавит самым первым узлом на странице, вверху
});

const newImageElement = document.createElement("img");
newImageElement.src =
  "https://i.pinimg.com/originals/c8/d7/c1/c8d7c18a6a9fd2c382299b12ef7c86c7.jpg";
console.log(newImageElement);
newImageElement.style.width = "250px";
// создать кнопку для прикрепления изображения
const btnAddImage = document.getElementById("add-img");
btnAddImage.addEventListener("click", () => {
  document.body.appendChild(newImageElement);
});
