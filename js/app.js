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
    eventbrite.queryAPI(eventName, category).then(events => {
      // checking the events
      const eventsList = events.events.events;
      if (eventsList.length > 0) {
        // printing the results
        ui.displayEvents(eventsList);
      } else {
        // message
        ui.printMessage(
          "Add an event or city",
          "text-center alert alert-danger mt-4"
        );
      }
    });
  } else {
    //   print error message
    ui.printMessage(
      "Add an event or city",
      "text-center alert alert-danger mt-4"
    );
  }
});
