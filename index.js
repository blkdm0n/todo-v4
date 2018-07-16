//REQ 1 todoList.addTodo should add objects

var todoList = {
  todos:[],
  displayTodos: function () {
    console.log(`My todos`, this.todos);
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  }  
}