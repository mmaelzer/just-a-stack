just-a-stack
============

[A linked list](https://github.com/mmaelzer/just-a-list) implementation of a stack.  
  
------------

###Objects###

**Stack**  
The stack object returned when require is called on this library  

	var Stack = require('just-a-stack');
	var stack = new Stack();

------------

###Methods###

**push(data)**  
Pushes data onto the top of the stack  

	var text = "i like to do drawings";
	stack.push(text);
	console.log(stack.peek());
	//> i like to do drawings


**pop()**  
Pops data off the top of the stack  

	var intro = "hello my name";
	stack.push(intro);
	var name = "is simon";
	stack.push(name);
	console.log(stack.pop());
	//> is simon


**peek()**  
Returns the data on the top of the stack without modifying the stack  

	var intro = "hello my name";
	stack.push(intro);
	var name = "is simon";
	stack.push(name);
	console.log(stack.peek());
	//> is simon
	console.log(stack.pop());
	//> is simon


**size()**  
Returns the size of the stack  

	console.log(stack.size());
	//> 2


**isEmpty()**  
Convience method that checks if the stack size is 0  

	if (!stack.isEmpty()) {
		while(stack.pop());
	}
	console.log(stack.isEmpty());
	//> true
