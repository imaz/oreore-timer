describe('pomodoro.js', function() {
  var clock;

  before(function() {
    clock = sinon.useFakeTimers();
  });

  it('タイマー開始直後はカウントが0になっていること', function() {
    var target = new Pomodoro();
    target.start();

    var actual = target.count;
    expect(0).to.eql(actual);
  });

  it('4999msec後にカウントが0のままになっていること', function() {
    var target = new Pomodoro();
    target.start();

    clock.tick(4999);
    var actual = target.count;
    expect(0).to.eql(actual);
  });

  it('5000msec後にカウントが1になっていること', function() {
    var target = new Pomodoro();
    target.start();

    clock.tick(5000);
    var actual = target.count;
    expect(1).to.eql(actual);
  });

  it('10000msec後にカウントが2になっていること', function() {
    var target = new Pomodoro();
    target.start();

    clock.tick(10000);
    var actual = target.count;
    expect(2).to.eql(actual);
  });

  after(function() {
    clock.restore();
  });
});
