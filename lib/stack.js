var List = require('just-a-list');

var Stack = function() {
	this.list = new List();
};

Stack.prototype.push = function(data) {
	return this.list.insertBeginning(data).data;
};

Stack.prototype.pop = function() {
	var node = this.list.removeBeginning();
	return node ? node.data : null;
};

Stack.prototype.peek = function() {
	return this.list.head ? this.list.head.data : null;
};

Stack.prototype.isEmpty = function() {
	return this.list.length === 0;
};

Stack.prototype.size = function() {
	return this.list.length;
}

module.exports = Stack;
