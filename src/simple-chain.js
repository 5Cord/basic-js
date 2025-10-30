const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink(pos) {
    if (!Number.isInteger(pos) || pos < 1 || pos > this.chain.length) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(pos - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const done = this.chain.join('~~');
    this.chain = [];
    return done;
  },
};

module.exports = {
  chainMaker,
};
