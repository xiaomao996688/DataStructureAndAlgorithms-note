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