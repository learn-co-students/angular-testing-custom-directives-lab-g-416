
describe('Directive Test', function(){
	browser.get('http://localhost:8080');
	var item = element(by.css('user-profile'));

	console.log(item)

	it('should display the info correctly', function(){

		expect(item.getText()).toContain('Name');
		expect(item.getText()).toContain('Position');
		expect(item.getText()).toContain('Description');
		expect(item.getText()).toContain('Bill Gates');
	})
});