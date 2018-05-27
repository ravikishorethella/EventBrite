// instantiating the classes

const eventbrite = new EventBrite();
const ui = new UI();

// listener for the submit button
document.getElementById("submitBtn").addEventListener("click", e => {
  e.preventDefault();

  const eventName = document.getElementById("event-name").value;
  const category = document.getElementById("category").value;
  if (eventName !== "") {
    // query event brite api
  } else {
    //   print error message
    ui.printMessage(
      "Add an event or city",
      "text-center alert alert-danger mt-4"
    );
  }
});
