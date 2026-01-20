const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  getLength() {
    if(this.hasOwnProperty('chain')) {
      return this.chain.length;
    }
    return 0;
  },
  addLink(value) {
    if(!this.hasOwnProperty('chain')) {
      this.chain = [];
    }
    arguments.length ? this.chain.push(value) : this.chain.push('  ');    
    return this;
  },
  removeLink(position) {
    const errorMessage = "You can't remove incorrect link!";
    if(!this.hasOwnProperty('chain') || !this.chain.length) {
      this.chain = [];
      throw new Error(errorMessage);
    }
    if(!Number.isInteger(position) || position < 1 || position > this.chain.length) {
      this.chain = [];
      throw new Error(errorMessage);
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    if(this.hasOwnProperty('chain') && this.chain.length) {
      this.chain = this.chain.reverse();
    }
    return this;
  },
  finishChain() {
    let resultchain = '';
    if(this.hasOwnProperty('chain') && this.chain.length) {
      resultchain = this.chain.map((item) => `( ${item} )`).join('~~');
    }
    this.chain = [];
    return resultchain;
  },
};

module.exports = {
  chainMaker,
};
