var Pomodoro = function() {
  var that = this, timer_id;

  this.count = 0;
  this.start = function(wait_time) {
  	wait_time = wait_time || 1000 * 60 * 25;
    timer_id = setInterval(function() {
      that.count += 1;
    }, wait_time);
  };
};

(function() {
  var pomodoro = new Pomodoro();
  pomodoro.start();
})();
