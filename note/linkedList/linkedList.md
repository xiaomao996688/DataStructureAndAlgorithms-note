## 链表
链表存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的。每个
元素由一个存储元素本身的节点和一个指向下一个元素的引用（也称指针或链接）组成。

<!-- 单向列表 -->

单向一个节点只有链向下一个节点的链接
```js
function LinkedList() {
	var Node = function (element) {
		this.element = element;
		this.next = null;
	}
	var head = null,length = 0;

	this.append = function (element) {
		var node = new Node(element);
		// 链表头部添加元素
		if (head === null) {
			head = node;
		} else {
			// 其他位置
			current = head;
			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}
		length ++;
	}
	// 指定位置插入
	this.insert = function (postion, element) {
		var node = new Node(element);
		var index = 0;
		if (position >=0 && position <= length) {
			if (position === 0) {
				if (head === null) {
					head = node;
				} else {
					node.next = head;
					head = node;
				}
			} else if (position === length) {
				current = head;
				while (current.next) {
					current = current.next;
				}
				current.next = node;
			} else {
				var previous;
				current = head;
				while (index++ < position) {
					previous = current;
					current = previous.next;
				}
				previous.next = node;
				node.next = current;
			}
			length ++;
			return true;
		} else {
			return false;
		}
	}
	// 移除特定位置节点
	this.removeAt = function (position) {
		var index = 0,current;

		if (position > -1 && position < length) {
			if (position === 0) {
				current = head;
				head = current.next;
			} else {
				while (index++ < position) {
					previous = current;
					current = previous.next;
				}
				previous.next = current.next;
			}
			length --;
			return current.element;
		} else {
			return null;
		}
	}

	// 移除一定元素
	this.remove = function (element) {
		var index = this.indexOf(element);
		return this.removeAt(index);
	}

	this.indexOf = function (element) {
		var current = head, index = 0;
		while (current) {
			if (element == current.element) {
				return index;
			}
			index ++;
			current = current.next;
		}
		return -1;
	}
	this.isEmpty = function () {
		return length === 0;
	}
	this.size = function () {
		return length;
	}
	this.getHead = function () {
		return head;
	}
}

```
双向链表中，链接是双向的：一个链向下一个元素，
另一个链向前一个元素。
```js

function DoublyLinkedList(){


	let Node = function(element,prev,next){
		this.element = element 
		this.prev = null 
		this.next = null
	}

	let length = 0 
	let head = null 
	let tail = null 

	this.append = function(element){

		var node = new Node(element)
		// util.isNull( 的相反是true);
		// 空列表
 		if(!head&&!tail)
		{
			head = node 
			tail = node 
		}
		else
		{
			// 不是空的列表
			let current =head 
			let previous
			while(current.next)
			{
				previous = current
				current = previous.next
			}
			// 迭代循环
			node.prev = current 
			current.next = node 
			tail = node 

		}
		length++
	}

	this.insert = function(position,element){
		let index = 0 
		let current 
		let previous

		var node = new Node(element)
		// 判断边界值
		 if(position > -1 && position <= length)
		 {
		 	// 如果插入到首位
		 	if(position === 0)
		 	{
		 		// 如果列表为空的时候
		 		if(!head&&!tail)
		 		{
		 			tail = node 
		 			head = node 
		 		}
		 		else
		 		{
		 			// 列表不为空
		 			current = head 
		 			node.next = current
		 			current.prev = node 
		 			head = node 
		 		}
		 	}
		 	//插在最后一位
		 	else if(length === position)
		 	{	
		 		// 迭代到最后的tail
		 	/*	let current = head 
		 		let previous
		 		while(current.next)
		 		{
		 			previous = current 
		 			current  = previous.next 
		 		}
		 		current.next = node 
		 		node.prev = current
		 		tail = node */
		 		current = tail 
		 		current.next = node 
		 		node.prev = current 
		 		tail = node 
		 	}
		 	else
		 	{
		 		// 中间的其他位置
		 		let index = 0 
		 		let current = head  
		 		let previous 
		 		while(index++ < position)
		 		{
		 			previous = current 
		 			current = previous.next 
		 		}
		 		previous.next = node 
		 		node.prev = previous

		 		current.prev = node 
		 		node.next = current 
		 	}
		 length++
		 	return true 
		 }
		 else
		 {
		 	return false 
		 }
	}
	// 移除特定位置的元素
	this.removeAt = function(position){
		let index = 0 
		let current = head 
		let previous
		// 判断 边界值
		if(position > -1 && position <length)
		{
			if(position===0)
			{
				current = current.next 
				head = current
			}
			// 最后一位
			else if(position === length-1)
			{
				current = tail 
			  current =	current.prev 
			  tail =current
			}
			else
			{
				while(index++ <position)
				{
					previous = current
					current = previous.next 
				}
				previous.next = current.next 
				current.next.prev = previous
			}
			length--	
			return true 
		}
		else
		{
			return false
		}	
	}
	// 移除指定的元素
	this.remove = function(element){
		let current = head 
		// 迭代找元素
		// 先找元素的位置然后删除
		let index = 0 
		while(current)
		{
			if(current.element == element)
			{
				// console.log(index,'a');
				return this.removeAt(index) 
			}
			index++
			current = current.next 
		}
		return -1

	}
	this.print = function(){
		let str = ''
		let index =0 
		let current = head 
		while(current)
		{
			str += current.element 
			current = current.next 
		}
		console.log(str);
		return str 
	}
}




```