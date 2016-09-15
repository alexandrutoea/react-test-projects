import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similiar tests
// Add string to describewhat we are testing
describe('App', () => {
	let component;

	beforeEach(() => {
		// Create an instance of App
		component = renderComponent(App);
	});

	// Use 'it' to test a single attribute of a target
	// String shows in report
	it ('renders', () => {
		// Use 'expect' to make an 'assertion' about a target (belief that a fact about target is true)
		expect(component).to.contain('');

	});

	it('shows a comment box', () => {
		expect(component.find('.comment-box')).to.exist;
	});

	it('shows a comment list', () => {
		expect(component.find('.comment-list')).to.exist;
	});

});
