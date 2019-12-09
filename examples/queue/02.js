let Queue = (function() {
  const items = weakMap();
  class Queue {
    constructor() {
      return items.set(this, []);
    }
    enqueue(element) {
      let q = items.get(this);
      q.push(element);
    }
    dequeue() {
      let q = items.get(this);
      let r = q.shift();
    }
    isEmpty() {
      return items.get(this).length === 0;
    }
    size() {
      return items.get(this).length;
    }
    clear() {
      items.get(this) = [];
    }
    print() {
      console.log(this.toString());
    }
    toString() {
      return items.get(this).toString();
    }
  }
  return Queue;
})();