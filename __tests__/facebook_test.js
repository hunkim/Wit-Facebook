jest.
dontMock('../facebook.js').
dontMock('request');

process.env.WIT_TOKEN = 'wit_token';
const FB = require('../facebook.js');

describe('FB tests', () => {

  it('FB creation', () => {
    expect(FB.fbReq).not.toBeNull();
  });

  it('FB fbMessage', () => {
    var ret = FB.fbMessage('sung', 'hello', {});
    expect(ret).toBe(undefined); // no return, so undefined
  });

  it('FB getFirstMessagingEntry', () => {
    var payload = null;
    require('fs').readFile('__tests__/msg.json', 'utf8', function(err, data) {
      if (err) throw err; // we'll not consider error handling for now
      payload = JSON.parse(data);
      expect(payload).not.toBeNull();

      var ret = FB.getFirstMessagingEntry(payload);
      expect(ret.message.text).toBe('in Hong Kong?');
    });
  });

});