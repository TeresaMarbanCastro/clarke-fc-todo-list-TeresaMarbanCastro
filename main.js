'use strict'
//DATE
const createDate = new Date();
const dayNumber = createDate.getDate();
const days = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubrer","Noviembre","Diciembre"];

const placeDayNumber = document.querySelector('.date__number');
placeDayNumber.innerHTML = dayNumber;
const placeDayName = document.querySelector('.date__day');
placeDayName.innerHTML = days[createDate.getDay()];
const placeMonthNAme = document.querySelector('.date__month-year');
placeMonthNAme.innerHTML = months[createDate.getMonth()] + ', ' + createDate.getFullYear();


// TASKS
//Add and remove task editor display
const placeShow = document.querySelector('.add__task');
const buttonShow = document.querySelector('.button__add');
function addTask(){
  placeShow.classList.toggle('show');
}
buttonShow.addEventListener('click', addTask);

//LOCAL STORAGE
let getLocalStorage = localStorage.getItem('key')? JSON.parse(localStorage.getItem('key')) : console.log("No hay entradas en el local storage");
saveInLocalStorage();
function saveInLocalStorage(){
  let localTask = document.querySelector('.new__task--input');
  const buttonTask = document.querySelector('.new__task--button');
      const listTask = document.querySelector('.tasks__list');
  let allTasks = [];

  //Array with objects in LS
  function  addNewTask() {
  	let tasks = {};
  	tasks.name = localTask.value;
  	tasks.completed = false;
  	allTasks.unshift(tasks);
  	localStorage.setItem('key', JSON.stringify(allTasks));
  	JSON.parse(localStorage.getItem('arrayTasks'));
    localTask.value = " ";

//Print list in html
    function printTask() {
      const listTask = document.querySelector('.tasks__list');
      let localTask = document.querySelector('.new__task--input');

  let item =   `<li class="tasks__item">
        <div class="checkbox__container">
          <input type="checkbox" id="checkbox"/>
          <label for="checkbox" class="item__name">${(tasks.name)}
          </label>
        </div>
      </li>`
        listTask.insertAdjacentHTML('afterbegin',item);
      }
      printTask();
  }
  buttonTask.addEventListener('click', addNewTask);

  function checkedItems(){

  }
  localStorage.setItem('key', JSON.stringify(allTasks));
  JSON.parse(localStorage.getItem('allTasks'));
}
