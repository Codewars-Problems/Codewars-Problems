function basicStack(word) {
  var letters = [];
  var word = word;
  var reverseWord = "";

  for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }

  for (var i = 0; i < word.length; i++) {
    reverseWord += letters.pop();
  }

  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }
}

var Stack = function () {
  this.length = 0;
  this.storage = {};

  this.push = function (value) {
    this.storage[this.length] = value;
    this.length++;
  };

  this.pop = function () {
    this.length--;
    var result = this.storage[this.length];
    delete this.storage[this.length];
    return result;
  };

  this.size = function () {
    return this.length;
  };

  this.peek = function () {
    return this.storage[this.length - 1];
  };
};
