function maskify(cc) {
  var allButLastFour = cc.slice(0, cc.length - 4);
  var hashHole = [];
  var lastFour = cc.slice(-4);

  if (cc.length <= 4) {
    return lastFour;
  }

  for (i = 0; i < allButLastFour.length; i++) {
    hashHole.push("#");
  }

  var conjoinedHashHole = hashHole.join("");

  return conjoinedHashHole + lastFour;
}
