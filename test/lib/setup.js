mocha.setup('bdd');
mocha.setup({ignoreLeaks: true});

window.onload = function() {
  if (window.mochaPhantomJS) {
    mochaPhantomJS.run();
  } else {
    mocha.run();
  }
};
