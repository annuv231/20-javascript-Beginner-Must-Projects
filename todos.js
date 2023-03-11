let todos = [];

function addTodos() {
  todos.push(prompt("Enter todos"));
}

function displayTodos() {
  console.log(todos);
}

function removeTodos() {
  let index = parseInt(prompt("Type index of todos"));
  todos.splice(index, 1);
}

let choice;
while (choice !== 4) {
  choice = parseInt(
    prompt(`
    Choose an action:
    1. Add todo item
    2. Display all todo items
    3. Remove todo item by index
    4. Exit
  `)
  );

  switch (choice) {
    case 1:
      addTodos();
      break;
    case 2:
      displayTodos();
      break;
    case 3:
      removeTodos();
      break;
    case 4:
      console.log("Existing todos");
      break;
    default:
      console.log("Invalid chice enter again");
      break;
  }
}
