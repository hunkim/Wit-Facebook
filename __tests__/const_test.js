jest.dontMock('../const.js');

describe('Const setting test', () => {
  /*
  it('No WIT_TOKEN test',  () => {
    require('../const.js');
   expect(config.WIT_TOKEN).toThrow(new Error('missing WIT_TOKEN'));
  	});*/

  it('WIT_TOKEN test', () => {
    process.env.WIT_TOKEN = 'wit_token';
    var config = require('../const.js');
    expect(config.WIT_TOKEN).toEqual('wit_token');
  });

  it('No FB_PAGE_TOKEN test', () => {
    var config = require('../const.js');
    expect(config.FB_PAGE_TOKEN).toEqual(null);
  });

  it('No FB_PAGE_TOKEN test', () => {
    process.env.FB_PAGE_TOKEN = 'fb_token';
    var config = require('../const.js');
    expect(config.FB_PAGE_TOKEN).toEqual('fb_token');
  });

  it('No FB_VERIFY_TOKEN test', () => {
    var config = require('../const.js');
    expect(config.FB_VERIFY_TOKEN).toEqual('just_do_it');
  });

  it('No FB_VERIFY_TOKEN test', () => {
    process.env.FB_VERIFY_TOKEN = 'fb_1234';
    var config = require('../const.js');
    expect(config.FB_VERIFY_TOKEN).toEqual('fb_1234');
  });
});