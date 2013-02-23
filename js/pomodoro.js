var Pomodoro = function() {
  var that = this, timer_id;

  this.count = 0;
  this.start = function() {
    timer_id = setInterval(function() {
      that.count += 1;
    }, 5000);
  };
};

(function() {
  var pomodoro = new Pomodoro();
  pomodoro.start();
})();
