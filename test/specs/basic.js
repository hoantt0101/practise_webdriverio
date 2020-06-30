var assert = require('assert');

describe('webdriver.io page', () => {
	it('should have the right title', () => {
		browser.url('https://www.vietnamworks.com/');
		const loginButton = $('.vnwHeader__wraper-noLogin');
		loginButton.click();
		const text = $('.vnwHeader__wraper-noLogin.a.title');
		console.log(text.getValue());
	});
});