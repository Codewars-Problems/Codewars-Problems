function getAverage(marks) {
  var sum = 0;
  var average;
  for (var i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  average = Math.floor(sum / marks.length);
  return average;
}
