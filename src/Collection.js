/**
 * Collection class is used to hold an array of resource data
 */
export default class Collection {

  /**
   * Constructs a new Collection
   * @param data Array
   */
  constructor(data = []) {
    this.setData(data);

    this[Symbol.iterator] = function *iterate() {
      for (const item of this.data) {
        yield item;
      }
    };
  }

  /**
   * Set the data array
   * @param data Array
   */
  setData(data) {
    this.data = data;
  }

  /**
   * Add an item to the collection
   * @param item
   */
  add(item) {
    this.data.push(item);
  }


  /**
   * Remove an item from the collection
   * @param item
   */
  remove(item) {
    this.data.splice(this.data.indexOf(item));
  }

  /**
   * Check if this collection includes the given item
   * @param items
   * @returns {boolean}
   */
  has(...items) {
    let hasItem = true;
    for (const item of items) {
      hasItem = hasItem && this.data.includes(item);
    }

    return hasItem;
  }
}
