const MaxHeap = require('./max-heap.js');
const error = () => {throw Error;}	

class PriorityQueue {
	constructor(maxSize) {
		this.defaultMaxSize = 30;
		this.maxSize = maxSize || this.defaultMaxSize;
		this.heap = new MaxHeap;
	}

	push(data, priority) {	
		this.size() === this.maxSize ? error() : this.heap.push(data, priority);		
	}

	shift() {
		return this.isEmpty() ? error() : this.heap.pop();
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		return this.heap.isEmpty();
	}
}

module.exports = PriorityQueue;
