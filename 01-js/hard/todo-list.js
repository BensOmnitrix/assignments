/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todo = [];
  }

  add(todo){
    this.todo.push(todo);
  }

  remove(indexOfTodo){
    if(this.todo.length == 0){
      console.log("Your list is empty...Cannot remove todo");
    }
    this.todo.splice(indexOfTodo,1);
  }

  update(index,updatedTodo){
    this.todo[index] = updatedTodo;
  }
  
  getAll(){
    return this.todo;
  }

  get(indexOfTodo){
    return this.todo[indexOfTodo];
  }

  clear(){
    while(this.todo.length > 0){
      this.todo.pop()
    }
  }

}

module.exports = Todo;
