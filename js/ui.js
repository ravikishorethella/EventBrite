class UI {
  constructor() {
    // when the app is initialized
    this.init();
  }
  init() {
    this.printCategories();
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
