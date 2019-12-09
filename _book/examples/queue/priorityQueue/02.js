let PriorityQueue = (function () {
  class QueueElement {
    constructor(element, priority) {
      this.element = element;
      this.priority = priority;
    }
  }

  const items = new WeakMap();

  class PriorityQueue {
    constructor () {
      items.set(this, []);
    }

    enqueue(element, priority) {
      let QueueElement = new QueueElement();

      let q = items.get(this);
      let added = false;
      
      for (var i =0; i < q.length; i++) {
        if (QueueElement.priority <= q[i].priority) {
          q.splice(i,0, QueueElement);
          added = true;
          break;
        }
      }
      if (!added) {
        q.push(QueueElement);
      }

      items.set(this, q);
    }

    dequeue() {
      let q = items.get(this);
      let r = q.shift();
      items.set(this, q);
    }

    isEmpty() {
      return items.get(this).length === 0;
    }

    size() {
      let q = items.get(this);
    }

    clear() {
      let q = items.get(this);
      return q.length;
    }

    print() {
      let q = items.get(this);
      for (var i =0; i <q.length; i++) {
        console.log(q[i]);
      }
    }
  }
  return PriorityQueue;
})();