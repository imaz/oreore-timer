describe('pomodoro.js', function() {
  var clock, default_wait_time = 1000 * 60 * 25;

  before(function() {
    clock = sinon.useFakeTimers();
  });

  it('タイマー開始直後はカウントが0になっていること', function() {
    var target = new Pomodoro();
    target.start();

    var actual = target.count;
    expect(0).to.eql(actual);
  });

  it('25分-1msec後にカウントが0のままになっていること', function() {
    var target = new Pomodoro();
    target.start();

    clock.tick(default_wait_time - 1);
    var actual = target.count;
    expect(0).to.eql(actual);
  });

  it('25分後にカウントが1になっていること', function() {
    var target = new Pomodoro();
    target.start();

    clock.tick(default_wait_time);
    var actual = target.count;
    expect(1).to.eql(actual);
  });

  it('50分後にカウントが2になっていること', function() {
    var target = new Pomodoro();
    target.start();

    clock.tick(default_wait_time * 2);
    var actual = target.count;
    expect(2).to.eql(actual);
  });

  after(function() {
    clock.restore();
  });
});
