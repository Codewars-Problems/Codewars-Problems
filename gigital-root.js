function digital_root(n) {
    let sum = n;
    let arr = [];
    let reducer = (a, b) => parseInt(a) + parseInt(b);

    if (sum > 9) {
        arr = sum.toString().split("");
        sum = arr.reduce(reducer);
        console.log(sum);
    }
}



function digital_root(n) {
  var numToStr = n.toString().split("");
  //for (var i = 0; i < numToStr.length; i++) {
    if (numToStr.length <= 1) {
      return n;
    }
    return numToStr[0] + sum(numToStr.slice(1));
  //}
}

function digital_root(n){
    var numToStr = n.toString().split("");
    if (numToStr.length === 1) {
        return numToStr[0];
    }
    else {
        return numToStr.pop() + digital_root(numToStr);
    }
}


function digital_root(n) {
    let sum = n;
    let arr = [];
    let reducer = (a, b) => parseInt(a) + parseInt(b);
    var arr = sum.toString().split("");
    if (arr.length ===1) {
        return arr[0]

    }
    return arr.reduce(reducer) + digital_root(arr);;

}
///
