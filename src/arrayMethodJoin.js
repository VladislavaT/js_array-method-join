'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultStr = '';

    if (this.length === 0) {
      return resultStr;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        resultStr += '';
      } else {
        resultStr += this[i];
      }

      if (i !== this.length - 1) {
        resultStr += separator;
      }
    }

    return resultStr;
  };
}

module.exports = applyCustomJoin;
