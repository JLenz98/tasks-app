//We listen for the browser to finish loading and then we know it's safe for our DOM manipulation code to run. We can't manipulate HTML elements that haven't loaded yet. Everything inside runs after our page loads.
window.addEventListener("load", function() {
  console.log(window);

  //Document Object Model (DOM)
  console.log(document);

  //We can select elements in JS in a similar way as CSS. We use document selector methods to do so.

  //document.getElementsByTagName selects elements based on their tag name.  Always returns collection of elements
  // var headings = document.getElementsByTagName("h1");

  //document.getElementById will select an element based on its ID.  Only returns a single value.
  var heading = document.getElementById("my-heading");

  var tasks = document.getElementsByClassName("task");

  // document.querySelector was inspired by the jQuery library. It will always return one element, not a collection. If you are searching for a class or an ID, you need to prepend it with a period or pound sign.
  var taskButton = document.querySelector("#task-button");
  var taskList = document.querySelector("#task-list");
  var contentField = document.querySelector("#name");

  // document.querySelectorAll() will return a collection of elements, even if it only finds one.



  // console.log(headings[0]);
  // heading.style.color = "grey";

  heading.addEventListener("click", function() {
    heading.innerHTML = "To Do:";
    heading.classList.toggle("big-blue-heading");
  });

  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    task.addEventListener("click", function() {
      event.target.classList.toggle("completed");
    });
  }

  taskButton.addEventListener("click", function() {
    var newTask = document.createElement("li");
    newTask.innerHTML = contentField.value;
    contentField.value = "";
    taskList.appendChild(newTask);
    newTask.addEventListener("click", function() {
      event.target.classList.toggle("completed");
    });
  });
});
