function helix() {
  var context = myCanvas.getContext('2d');
  var x = 0, y = 0, width = myCanvas.width, height = myCanvas.height;

  function drawManyRectangles() {
    var n = 10;
    width = 20;
    height = 20;
    for (var i=0; i < n; i++) {
      x = i/10 * myCanvas.width;
      y = i/10 * myCanvas.height;
      context.fillRect(x, y, width, height);
    }
  }
  drawManyRectangles();
}
helix();
