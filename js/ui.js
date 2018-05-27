class UI {
  constructor() {
    // when the app is initialized
    this.init();
  }
  init() {
    this.printCategories();
  }
  printCategories() {
    const categoriesList = eventbrite.getCategoriesAPI().then(categories => {
      console.log(categories);
    });
  }
}
