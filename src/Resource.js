export default class Resource {
  /**
   * Creates an instance of the resource
   *
   * @param data {Array}
   * @param client {ApiClient}
   */
  constructor(data, client) {
    this.setData(data);
    this.client = client;
    this.fetch = client.fetch;
  }

  /**
   * Set the data
   *
   * @param data
   */
  setData(data) {
    Object
      .keys(data)
      .forEach(key => {
        if (!this.hasOwnProperty(key)) {
          this[key] = data[key];
        }
      });
  }
}
