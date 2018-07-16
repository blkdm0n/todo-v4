
var todoList = {
  todos:[],
  displayTodos: function () {
    console.log(`My todos`, this.todos);
  },
  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function (oldTodo, newTodo) {
    this.todos.forEach((todo, index) => {
      if (todo.todoText === oldTodo) {
        this.todos[index].todoText = newTodo;
      }
    });
    this.displayTodos();
  }, 
}