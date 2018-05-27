class EventBrite {
  // constructor
  constructor() {
    this.token_auth = "ZXUTNKIMCF2E5IX3J3G5";
    this.orderby = "date";
  }

  //   get the events from teh api
  async queryAPI(eventName, category) {
    const eventsResponse = await fetch(
      `https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&sort_by=${
        this.orderby
      }&categories=${category}&token=${this.token_auth}`
    );
    const events = await eventsResponse.json();
    return {
      events
    };
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
