import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //Select elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input:any = document.getElementById("input");
const element = document.getElementById("element");

let LIST = [];
let id = 0;
// Clases name
const CHECK = "fa-check-circle";
const UNCHECK ="fa-circle-thin";
const LINE_THROUGH ="lineThrough";

const options = {weekday : "long", month:"short", day:"numeric"}
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);


function addToDo(toDo, id, done, trash){
    if(trash){return;}

    const DONE = done ? CHECK : UNCHECK ;
    const LINE = done ? LINE_THROUGH: "";

    const text =`<li class = "item">
                    <i class = "fa ${DONE} co" job ="complete" id="${id}"> </i>
                    <p class="text ${LINE}"> ${toDo} </p>
                    <i class =" fa fa-trash-o de" job = "delete" id ="${id}"></i>
                 </li> `

    const position = "beforeend";

    list.insertAdjacentHTML(position, text);
}
document.addEventListener("keyup",function(event){
    if(event.which == 13){
        const toDo = input.value;
        if (toDo) {
            addToDo(toDo, id, false, false);
            LIST.push({
                    name: toDo,
                    id: id,
                    done: false,
                    trash: false
                });
            id++
        }
        input.value = "";
    }
});


function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    LIST[element.id].done = LIST[element.id].done ? false : true;
}
function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
}

list.addEventListener("click", function(event){
    let element:any = event.target;
    const elementJOB = element.attributes.job.value;
    if(elementJOB == "complete"){
        completeToDo(element);
    }else if(elementJOB == "delete"){
        removeToDo(element);
    }
})
  }

}
