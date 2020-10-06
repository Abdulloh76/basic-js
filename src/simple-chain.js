const CustomError = require("../extensions/custom-error");

const chainMaker = {
  str: '',
  getLength() {
    return this.str.split('~~').length;
  },
  addLink(value = '') {
    if(value === null) 
      value = 'null';
    if(this.str === '') {
      this.str = `( ${value.toString()} )`
    } else {
      this.str += `~~( ${value.toString()} )`
    }
    return this;
  },
  removeLink(position) {
    if(this.str.getLength < 1 || this.str.getLength > position || typeof(position) !== 'number') {
      this.str = '';
      throw new Error;
    }
    
    let arr = this.str.split('~~');
    arr.splice(position - 1, 1);
    this.str = arr.join('~~');
    return this;
  },
  reverseChain() {
    if(this.str === '' || this.getLength === 1) return this
    this.str = this.str.split('~~').reverse().join('~~');
    return this;
  },
  finishChain() {
    const result = this.str;
    this.str = '';
    return result;
  }
};

module.exports = chainMaker;
