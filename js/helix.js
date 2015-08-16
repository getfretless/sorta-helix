function helix() {
  var context = myCanvas.getContext('2d');
  var x = 0, y = 0, width = myCanvas.width, height = myCanvas.height;

  function drawManyRectangles() {
    var n = 10;
    width = 20;
    height = 20;
    var time = 0;

    var redraw = function() {
      context.clearRect(0, 0, myCanvas.width, myCanvas.height);
      for (var i=0; i < n; i++) {
        x = i/10 * myCanvas.width + time;
        y = i/10 * myCanvas.height + time;
        context.fillRect(x, y, width, height);
      }
      time ++;
    };
    setInterval(redraw, 20);
  }
  drawManyRectangles();
}
helix();
