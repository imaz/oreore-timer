var Pomodoro = function() {
  var that = this, timer_id;

  this.count = 0;
  this.start = function() {
    pomodoro_timer();
    timer_id = setInterval(function() {
      pomodoro_timer();
    }, 1000 * 60 * 30);
  };

  var pomodoro_timer = function() {
    concentrate_timer_id = setTimeout(function() {
      that.count += 1;
      coffee_break_timer_id = setTimeout(function() {
      }, 1000 * 60 * 5);
    }, 1000 * 60 * 25);
  };
};

(function() {
  var pomodoro = new Pomodoro();
  pomodoro.start();
})();
