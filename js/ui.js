class UI {
  constructor() {
    // when the app is initialized
    this.init();
  }
  init() {
    this.printCategories();
    this.result = document.getElementById("result");
  }

  // displaying the events from the api
  displayEvents(events) {
    let HTMLTemplate = "";

    //   looping throught the events
    events.forEach(eventInfo => {
      HTMLTemplate += `
             <div class="col-md-4 mt-4">
                  <div class="card">
                       <div class="card-body">
                            <img class="img-fluid mb-2" src="${
                              eventInfo.logo !== null ? eventInfo.logo.url : ""
                            }">
                       </div>
                       <div class="card-body">
                            <div class="card-text">
                                 <h2 class="text-center card-title">${
                                   eventInfo.name.text
                                 }</h2>
                                 <p class="lead text-info">Event Information:</p>
                                 <p>${eventInfo.description.text}...</p>
                                 <span class="badge badge-primary">Capacity: ${
                                   eventInfo.capacity
                                 }</span>
                                 <span class="badge badge-secondary">Date & Time: ${
                                   eventInfo.start.local
                                 }</span>

                                 <a href="${
                                   eventInfo.url
                                 }" target="_blank" class="btn btn-primary btn-block mt-4">Get Tickets</a>
                            </div>
                       </div>
                  </div>
             </div>

        `;
    });
    this.result.innerHTML = HTMLTemplate;
  }

  printCategories() {
    const categoriesList = eventbrite
      .getCategoriesAPI()
      .then(categories => {
        const categoriesList = categories.categories.categories;
        const categorySelect = document.getElementById("category");

        //   iterating over the array
        categoriesList.forEach(category => {
          const option = document.createElement("option");
          option.value = category.id;
          option.appendChild(document.createTextNode(category.name));
          categorySelect.appendChild(option);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  //   displays message
  printMessage(message, className) {
    const div = document.createElement("div");
    div.className = className;
    // text message
    div.appendChild(document.createTextNode(message));

    // insert into the html
    const searchDiv = document.querySelector("#search-events");
    searchDiv.appendChild(div);

    // remove the alert after 3 sec
    setTimeout(() => {
      this.removeMessage();
    }, 3000);
  }

  //   Remove the message
  removeMessage() {
    const alert = document.querySelector(".alert");
    if (alert) {
      alert.remove();
    }
  }
}
