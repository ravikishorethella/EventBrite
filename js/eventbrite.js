class EventBrite {
  // constructor
  constructor() {
    this.token_auth = "ZXUTNKIMCF2E5IX3J3G5";
  }

  //   getting the categories from the api
  async getCategoriesAPI() {
    const categoresResponse = await fetch(
      `https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`
    );
    // return the data as json

    const categories = await categoresResponse.json();
    return {
      categories
    };
  }
}
