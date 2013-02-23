describe('pomodoro.js', function() {
  var clock
  , concentrait_time = 1000 * 60 * 25
  , coffee_break_time = 1000 * 60 * 5;

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

    clock.tick(concentrait_time - 1);
    var actual = target.count;
    expect(0).to.eql(actual);
  });

  it('25分後にカウントが1になっていること', function() {
    var target = new Pomodoro();
    target.start();

    clock.tick(concentrait_time);
    var actual = target.count;
    expect(1).to.eql(actual);
  });

  it('55分-1msec後にカウントが1のままになっていること', function() {
    var target = new Pomodoro();
    target.start();

    var wait_time = concentrait_time * 2
             + coffee_break_time - 1;
    clock.tick(wait_time);
    var actual = target.count;
    expect(1).to.eql(actual);
  });

  it('55分後にカウントが2になっていること', function() {
    var target = new Pomodoro();
    target.start();

    var wait_time = concentrait_time * 2
             + coffee_break_time;
    clock.tick(wait_time);
    var actual = target.count;
    expect(2).to.eql(actual);
  });

  after(function() {
    clock.restore();
  });
});
