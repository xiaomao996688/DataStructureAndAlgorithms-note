function Stack() {
  var items = [];
  this.push = function(element) {
    items.push(element);
  }
  this.pop = function() {
    return items.pop();
  }
  this.size = function() {
    return items.length;
  }
  this.print = function() {
    console.log(items.toString())
  }
}