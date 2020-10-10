let arrayOfTodos = [
  {
    userId: 14,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 20,
    id: 2,
    title: "delectus aut autem",
    completed: false,
  },
];

const fetchTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => (arrayOfTodos = json));
  console.log(arrayOfTodos);
};

const logTodos = () => {
  console.log(arrayOfTodos);
};

const populateTodos = () => {
  console.log(arrayOfTodos);
  // THIS IS A LOOP
  for (i = 0; i < arrayOfTodos.length; i++) {
    var myLi = document.createElement("li"); // Create a <li>
    var t = document.createTextNode(arrayOfTodos[i].title); // Create a text
    myLi.appendChild(t);
    document.querySelector("ol").appendChild(myLi); // Append the text to <p>

    // console.log(arrayOfTodos[i].completed);
    if (arrayOfTodos[i].completed == false) {
      myLi.classList.add("incomplete");
    }

    if (arrayOfTodos[i].completed == true) {
      myLi.classList.add("complete");
    }
  }
};

// let x = 4;
// if (x > 5 == true) {
//   console.log("x is greater than 5");
// } else if (x < 5 == true) {
//   console.log("x is less than 5");
// }
