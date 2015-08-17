function helix() {
  var context = myCanvas.getContext('2d');
  var f = document.querySelector('form');

  var x = 0, y = 0, width = myCanvas.width, height = myCanvas.height, offset = 0;
  var interval, intervals = [];

  f.n.focus();

  function drawManyRectangles(ev) {
    ev.preventDefault();
    width = f.w.value;
    height = f.h.value;

    var redraw = function() {
      clear();
      for (var i=0; i < f.n.value; i++) {
        x = i/10 * myCanvas.width + offset;
        y = i/10 * myCanvas.height + offset;
        context.fillRect(x, y, width, height);
      }
      offset ++;
    };

    stop();
    interval = setInterval(redraw, 20);
  }

  function animateCircle(ev) {
    ev.preventDefault();

    var redraw = function() {
      var sin, cos;
      clear();
      width = f.w.value * Math.random();
      height = f.h.value * Math.random();

      for (var i=0; i < f.n.value; i++) {
        sin = Math.sin(i / 20 + offset) / 2 + 0.5;
        cos = Math.cos(i / 20 + offset) / 2 + 0.5;
        x = sin * (myCanvas.width - width);
        y = cos * (myCanvas.height - height);
        context.fillRect(x, y, width, height);
      }
      offset += 0.1;
    };

    stop();
    interval = setInterval(redraw, 20);
  }


  function pendulums(ev) {
    ev.preventDefault();

    var redraw = function() {
      clear();
      width = f.w.value;
      height = f.h.value;

      for (var i=0; i < f.n.value; i++) {
        x = myCanvas.width / 2 + Math.sin(offset * i) * 100;
        y = i / f.n.value * myCanvas.height;
        context.fillRect(x, y, width, height);
      }
      offset += 0.2;
    };

    stopPendulums();
    intervals.push(setInterval(redraw, 60));
  }

  function stopPendulums() {
    var removed_item;
    while (intervals.length > 0) {
      removed_item = intervals.pop();
      clearInterval(removed_item);
    }
  }

  function stop() {
    clearInterval(interval);
  }

  function clear() {
    context.clearRect(0, 0, myCanvas.width, myCanvas.height);
  }

  f.onsubmit = pendulums;
  f.stop.onclick = stopPendulums;

  f.reset.onclick = function () {
    offset = 0;
    clear();
    f.n.focus();
    f.n.select();
  };
}
helix();
