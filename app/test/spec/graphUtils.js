describe('Graph Utilities', function() {
  beforeEach(module('recsApp'));

  var graphUtils = null;
  beforeEach(inject(function(_graphUtils_) {
    console.log('Injecting ' + _graphUtils_);
    graphUtils = _graphUtils_;
  }));

  it('has a property', function() {
    console.log('Running test ');
    expect(graphUtils.hasOwnProperty('parse')).toBeTruthy();
  });

});
