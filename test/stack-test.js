var should = require('should');
var Stack = require('../lib/stack');

var testData = ["i've", "got", "a", "lovely", "bunch", "of", "coconuts"];

describe('just-a-stack', function() {

	var stack = null;

	beforeEach(function(done) {
		stack = new Stack();
		testData.forEach(function(data) {
			stack.push(data);
		});
		done();
	});

	afterEach(function(done) {
		while (stack.pop() !== null) {}
		stack = null;
		done();
	});

	describe("#push(data)", function() {
		it("inserts data into the stack", function(done) {
			stack.size().should.equal(testData.length);
			done();
		});

		it("returns the data pushed onto the stack", function(done) {
			var data = stack.push(testData[0]);
			data.should.equal(testData[0]);
			done();
		});
	});

	describe("#pop()", function() {
		it("removes the top-most data from the stack", function(done) {
			var data = stack.pop();
			data.should.equal(testData[testData.length - 1]);
			stack.peek().should.equal(testData[testData.length - 2]);
			done();
		});
	});

	describe("#peek()", function() {
		it("returns the top value on the stack", function(done) {
			var data = stack.peek();
			data.should.equal(testData[testData.length - 1]);
			done();
		});

		it("doesn't modify the stack", function(done) {
			var size = stack.size();
			var data = stack.peek();
			stack.size().should.equal(size);
			done();
		});
	});

	describe("#isEmpty()", function() {
		it("returns true if the stack's size is 0", function(done) {
			stack.isEmpty().should.be.false;
			while(stack.pop());
			stack.isEmpty().should.be.true;
			done();
		});
	});

	describe("#size()", function() {
		it("returns the size of the stack", function(done) {
			var counter = stack.size();
			while(stack.pop()) {
				stack.size().should.equal(--counter);
			}
			testData.forEach(function(data) {
				stack.push(data);
				stack.size().should.equal(++counter);
			});
			done();
		});
	});
});