jest.dontMock('../const.js');

describe('Const setting test', function() {
  it('WIT_TOKEN test'), function() {
    process.env.WIT_TOKEN = 'wit_token';
    var config = require('../const.js');
    expect(config.WIT_TOKEN).toBe('wit_token');
  };
});
