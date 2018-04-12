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

// //Tasks list
// var tasks = '';
// for (var i = 0; i < tasks.length; i++) {
//   let item =
//   `<li class="tasks__item">
//     <input class="item__checkbox" type="checkbox">
//     <h4 class="item__name">${tasks[i].name}</h4>
//   </li>
//   `
// var placeTask = document.querySelector('.tasks__list');
//       // analiza la cadena de texto e inserta los nodos en el orden determinado
// placeTask.insertAdjacentHTML('beforeend', item);
// }


//Add task display
var placeShow = document.querySelector('.add__task');
var buttonShow = document.querySelector('.button__add');
function addTask(){
  placeShow.classList.add('show');
}
buttonShow.addEventListener('click', addTask);


//Create New Task
var allTasks = [];
var buttonTask = document.querySelector('.new__task--button');
//push
function addNewTask(){
    var placeTask = document.querySelector('.item__name');
    var dataTask = document.querySelector('.new__task--input').value;
  placeTask.innerHTML = dataTask;

}
buttonTask.addEventListener('click', addNewTask);


//Cross out completed tasks
var checkbox = document.querySelector('.checkbox').value;
var cross = document.querySelector('.item__name');
