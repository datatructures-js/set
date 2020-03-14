/**
 * datastructures-js/set
 * @copyright 2020 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

/**
 * @class EnhancedSet
 * @extends Set - REF: https://mzl.la/2QajnHr
 */
class EnhancedSet extends Set {
  /**
   * https://en.wikipedia.org/wiki/Union_(set_theory)
   *
   * @param {Set} set
   * @returns {Set}
   */
  union(set) {
    if (!(set instanceof Set)) {
      throw new Error('union expects an instance of Set');
    }

    const result = new EnhancedSet();
    this.forEach((element) => result.add(element));
    set.forEach((element) => result.add(element));
    return result;
  }

  /**
   * https://en.wikipedia.org/wiki/Intersection_(set_theory)
   *
   * @param {Set} set
   * @returns {Set}
   */
  intersect(set) {
    if (!(set instanceof Set)) {
      throw new Error('intersect expects an instance of Set');
    }

    const result = new EnhancedSet();
    this.forEach((element) => {
      if (set.has(element)) {
        result.add(element);
      }
    });

    return result;
  }

  /**
   * https://en.wikipedia.org/wiki/Complement_(set_theory)
   *
   * @param {Set} set
   * @returns {Set}
   */
  complement(set) {
    if (!(set instanceof Set)) {
      throw new Error('complement expects an instance of Set');
    }

    const result = new EnhancedSet();
    this.forEach((element) => {
      if (!set.has(element)) {
        result.add(element);
      }
    });

    return result;
  }

  /**
   * https://en.wikipedia.org/wiki/Subset
   *
   * @param {Set} set
   * @returns {boolean}
   */
  isSubsetOf(set) {
    if (!(set instanceof Set)) return false;

    let count = 0;
    this.forEach((element) => {
      if (set.has(element)) {
        count += 1;
      }
    });

    return count === this.size;
  }

  /**
   * https://en.wikipedia.org/wiki/Subset
   *
   * @param {Set} set
   * @returns {boolean}
   */
  isSupersetOf(set) {
    if (!(set instanceof Set)) return false;

    let count = 0;
    set.forEach((element) => {
      if (this.has(element)) {
        count += 1;
      }
    });

    return count === set.size;
  }

  /**
   * https://en.wikipedia.org/wiki/Cartesian_product
   *
   * @param {Set} set
   * @returns {Set}
   */
  product(set) {
    if (!(set instanceof Set)) {
      throw new Error('product expects an instance of Set');
    }

    const result = new EnhancedSet();
    this.forEach((e1) => {
      set.forEach((e2) => {
        result.add(`${e1},${e2}`);
      });
    });

    return result;
  }
}

module.exports = EnhancedSet;
