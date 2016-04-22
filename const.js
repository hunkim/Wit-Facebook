'use strict';

// Wit.ai parameters
//const WIT_TOKEN = process.env.WIT_TOKEN;
const WIT_TOKEN = "HP5R5XF6CKFYBRUE24MKY63CU3H4NEKD";
if (!WIT_TOKEN) {
  	throw new Error('missing WIT_TOKEN');
}

// Messenger API parameters
//const FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN;
const FB_PAGE_TOKEN = "CAAGhcpMtr5gBAHg5u4eleiOWfY18P8LRoANEabx2xKZCPASzCzCK4ueW5ppejnmutil5UWHwiRBe52y4lCL5V9gquFaS8ex0awJSHmPIBtdW3jZAggWnWwZCDkW9nHdoC1B3SrBJWeWBXWtNlGmO1RevXy3uEPywOlZCLuYGAcDMOlAiZB03odwrMJwZAOZBeEZD";
if (!FB_PAGE_TOKEN) {
  	throw new Error('missing FB_PAGE_TOKEN');
}

const FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN;
if (!FB_VERIFY_TOKEN) {
  	const FB_VERIFY_TOKEN = "my_voice_is_my_password_verify_me";
}

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
};