var Pomodoro = function() {
  var timer_id;

  this.count = 0;
  this.start = function() {
    timer_id = setInterval(function() {
      this.count += 1;
    }, 5000);
  };
};

(function() {
  var pomodoro = new Pomodoro();
  pomodoro.start();
})();
