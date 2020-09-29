var Queue = function () {
  this.length = 0;
  this.storage = {};

  this.enqueue = function (value) {
    this.storage[this.length] = value;
    this.length++;
  };

  this.dequeue = function () {
    this.length--;
    var result = this.storage[0];
    delete this.storage[0];
    return result;
  };

  this.size = function () {
    return this.length;
  };

  this.isEmpty = function () {
    return this.length === 0;
  };
};
