

document.getElementById("taskInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default form submission
      addTask(); // Call the function to add a new task
  }
});

document.getElementById("addButton").addEventListener("click", function() {
  addTask(); // Call the function to add a new task
});

function addTask() {
  // Get user input
  var taskText = document.getElementById("taskInput").value;

  if (taskText.trim() !== '') {
      // Create a new list item
      var listItem = document.createElement("li");

      // Set the text of the list item
      listItem.textContent = taskText;

      // Attach a click event listener to toggle task status
      listItem.addEventListener("click", function() {
          listItem.classList.toggle("completed");
      });

      // Append the new task to the list
      document.getElementById("taskList").appendChild(listItem);

      // Clear the input field
      document.getElementById("taskInput").value = '';
  }
}


// Add Button Click Event Listener
// document.getElementById("addButton").addEventListener("click", function() {
//   // Get user input
//   var taskText = document.getElementById("taskInput").value;
  
//   if (taskText.trim() !== '') { // Check if input is not empty
//     // Create a new list item
//     var listItem = document.createElement("li");
    
//     // Set the text of the list item
//     listItem.textContent = taskText;
    
//     // Attach a click event listener to toggle task status
//     listItem.addEventListener("click", function() {
//       listItem.classList.toggle("completed"); 

//     });
    
//     // Append the new task to the list
//     document.getElementById("taskList").appendChild(listItem);
    
//     // Clear the input field
//     document.getElementById("taskInput").value = '';
//   }
// });
