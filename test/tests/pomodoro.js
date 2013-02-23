describe('pomodoro.js', function() {
  it('タイマー開始直後はカウントが0になっていること', function() {
    var target = new Pomodoro();
    target.start();
    var actual = target.count;
    expect(actual).to.eql(0);
  });
});
