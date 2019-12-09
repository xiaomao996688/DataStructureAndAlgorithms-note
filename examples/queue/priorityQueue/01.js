function PriorityQueue() {
  var items = [];
  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function(element, priority) {
    var queueElement = new QueueElement(element, priority);
    let added = false;
    // 判断优先级别
    for (var i =0 ;i< items.length; i++) {
      if (queueElement.priority <= items[i].priority) {
        items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }
    // 插在最后
    if(!added) {
      items.push(queueElement);
    }
  }

  this.dequeue = function() {
    return items.shift();
  }

  this.isEmpty = function() {
    return items.length === 0;
  }

  this.size = function() {
    return items.length;
  }

  this.print = function() {
    for(var i = 0; i < items.length; i++) {
      console.log(items[i])
    }
  }
}

var priorityQueue = new PriorityQueue();
priorityQueue.enqueue("a",0);
priorityQueue.enqueue("b",1);
priorityQueue.enqueue("c",2);
priorityQueue.enqueue("d",0);
priorityQueue.print();