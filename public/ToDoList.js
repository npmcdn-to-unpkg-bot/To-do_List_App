var socket = io();
var app = feathers();      
app.configure(feathers.socketio(socket));      
var list = app.service('ToDoListServices');
      
/*list.on('created', function(input) { //show
    var itemsList = document.getElementById("itemslist");
    itemslist.innerHTML += input.text + "</br>";   
});  

/*function createList() { // add
var input = document.getElementById("input").value;
list.create({text: input});
}*/  
      

function get_todolist() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}

function createList() {   
    var input = document.getElementById("input").value;
 
    var todos = get_todoslist();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
  
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}

function show() {
    var todos = get_todos();
 
    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';
 
    document.getElementById('todos').innerHTML = html;
 
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
 
document.getElementById('add').addEventListener('click', add);
show();