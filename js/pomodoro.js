var Pomodoro = function() {
	var timer_id;

  this.start = function() {
    timer_id = setInterval(function() {
      console.log("ほげ");
    }, 5000);
  };
};

(function() {
  var pomodoro = new Pomodoro();
  pomodoro.start();
})();
