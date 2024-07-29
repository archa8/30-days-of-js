/*
Activity 4: Queue

Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view first element).
*/

class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(element) {
        this.queue.push(element);
    }

    dequeue() {
        if (this.queue.length === 0) {
            return "Queue is empty!";
        }
        return this.queue.shift();
    }

    front() {
        if (this.queue.length === 0) {
            return "Queue is empty, you can't view any element";
        }
        return this.queue[0];
    }
}

/*
Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
*/

function print(jobs) {
    const queue = new Queue();
    for (let i = 0; i < jobs.length; i++) {
        queue.enqueue(jobs[i]);
    }
    while (queue.queue.length > 0) {
        console.log(`Processing job: ${queue.dequeue()}`);
    }
}

const test = ["Job 1", "Job 2", "Job 3", "Job 4"];
print(test);