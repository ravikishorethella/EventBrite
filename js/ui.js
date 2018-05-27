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
}
