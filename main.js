'use strict'
//DATE
var createDate = new Date();
var dayNumber = createDate.getDate();
var days = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
var months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubrer","Noviembre","Diciembre"];

var placeDayNumber = document.querySelector('.date__number');
placeDayNumber.innerHTML = dayNumber;
var placeDayName = document.querySelector('.date__day');
placeDayName.innerHTML = days[createDate.getDay()];
var placeMonthNAme = document.querySelector('.date__month-year');
placeMonthNAme.innerHTML = months[createDate.getMonth()] + ', ' + createDate.getFullYear();


// TASKS
//Add and remove task editor display
var placeShow = document.querySelector('.add__task');
var buttonShow = document.querySelector('.button__add');
function addTask(){
  placeShow.classList.toggle('show');
}
buttonShow.addEventListener('click', addTask);

//LOCAL STORAGE
saveInLocalStorage();
getLocalStorage();
function getLocalStorage(){
  if(localStorage.getItem("key")){
    const key = JSON.parse(localStorage.getItem("key"));
    console.log(key);
  }else{
    console.log("No hay entradas en el local storage");
  }
}
function saveInLocalStorage(){
  let localTask = document.querySelector('.new__task--input');
  const buttonTask = document.querySelector('.new__task--button');
  const listTask = document.querySelector('.tasks__list');

  // const buttonAdd = document.querySelector('.button--add');
  // const addTask = document.querySelector('.new-task');
  let allTasks = [];

  //Array with objects
  function  addNewTask() {
  	let tasks = {};
  	tasks.name = localTask.value;
  	tasks.completed = false;
  	allTasks.unshift(tasks);
  	localStorage.setItem("key", JSON.stringify(allTasks));
  	JSON.parse(localStorage.getItem('arrayTasks'));
    localTask.value = " ";
  }
  buttonTask.addEventListener('click', addNewTask);


  const placeTask = document.querySelector('.item__name');
  const taskList = document.querySelector('.tasks__list');
  const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    taskList.appendChild(li);
  }

  localStorage.setItem("key", JSON.stringify(allTasks));
  JSON.parse(localStorage.getItem('allTasks'));
}
