export default class Comparator {
  /**
   * Constructor.
   * @param {function(a: *, b: *)} [compareFunction] - It may be custom compare function that,
   * let's say may compare custom objects together.
   */

  constructor(compareFunction) {
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

  /**
   * Default comparison function. It just assumes that 'a' and 'b' are strings or numbers.
   * @param {(string|number)} a
   * @param {(string|number)} b
   * @returns {number}
   */
  static defaultCompareFunction(a, b) {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  }

  /**
   * Checks if two variables are equal.
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  // Traditional function
  equal(a, b) {
    return this.compare(a, b) === 0;
  }
  // Arrow function
  // equal = (a, b) => this.compare(a, b) === 0;

  /**
   * Checks if variable "a" is less than "b"
   * @param {*} a
   * @param {*} b
   * @returns  {boolean}
   */
  // Traditional function
  lessThan(a, b) {
    return this.compare(a, b) < 0;
  }
  // Arrow function
  // lessThan = (a, b) => this.compare(a, b) < 0;

  /**
   * Checks if variable "a" is greater than "b".
   * @param {*} a
   * @param {*} b
   * @returns  {boolean}
   */
  // Traditional function
  greaterThan(a, b) {
    return this.compare(a, b) > 0;
  }
  // Arrow function
  // greaterThan = (a, b) => this.compare(a, b) > 0;

  /**
   * Checks if variable "a" is less than or equal to "b".
   * @param {*} a
   * @param {*} b
   * @returns {boolean}
   */
  // Traditional function
  lessThanOrEqual(a, b) {
    return this.lessThan(a, b) || this.equal(a, b);
  }
  // Arrow function
  // lessThanOrEqual = (a, b) => this.lessThan(a, b) || this.equal(a, b);

  /**
   * Checks if variable "a" is greater than or equal to "b"l
   * @param {*} a
   * @param {*} b
   * @returns {boolean}
   */
  // Traditional function
  greaterThanOrEqual(a, b) {
    return this.greaterThan(a, b) || this.equal(a, b);
  }

  //Arrow Function
  // greaterThanOrEqual = (a, b) => this.greaterThan(a, b) || this.equal(a, b);

  /**
   * Reverses the comparison order.
   */

  reverse() {
    const compareOriginal = this.compare;
    this.compare = (a, b) => compareOriginal(b, a);
  }
}

const instanceA = new Comparator();
