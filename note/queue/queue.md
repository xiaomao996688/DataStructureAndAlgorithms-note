## 队列
队列是一种遵从先进先出（FIFO）先来先服务的有序的项.

```js

function Queue() {
  var items = [];

  this.enqueue = function(element) {
    items.push(element);
  }
  this.dequeue = function() {
    return items.dequeue();
  }
  this.isEmpty = function() {
    return items.length === 0;
  }
  this.clear = function() {
    items = [];
  }
  this.size = function() {
    return items.size;
  }
  this.print = function() {
    console.log(items.toString())
  }
}

````

```js
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

```