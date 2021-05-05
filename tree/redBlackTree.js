const Compare = {
  EQUALS: 0,
  LESS_THAN: -1,
  BIGGER_THAN: 1
}
const Colors = {
  RED: true,
  BLACK: false
}
const defaultCompare = (a, b) => {
  if (a === b) {
    return Compare.EQUALS
  }
  return  a > b ? Compare.BIGGER_THAN : Compare.LESS_THAN
}
class Node {
  constructor (key, value, parent, right, left, color = false) {
    // read true, black false
    this.key = key
    this.right = right
    this.left = left
    this.color = color
    this.parent = parent
    this.value = value
  }
}
class RBT {
  constructor (compareFn = defaultCompare) {
    this.root = null
    this.count = 0
    this.compareFn = compareFn
  }
  /**
   * 
   * @param {节点} p 围绕p进行左旋
   */
  leftRotate (p) {
    if (p) {
      let right = p.right
      p.right = right.left
      if (right.left) {
        right.left.parent = p
      }
      right.parent = p.parent
      if (p.parent === null) {
        this.root = right
      } else if (p.parent.left === p) {
        p.parent.left = right
      } else if (p.parent.right === p) {
        p.parent.right = right
      }
      right.left = p
      p.parent = right
    }
  }
  rightRotate (p) {
    if (p) {
      let left = p.left
      p.left = left.right
      if (left.right) {
        left.right.parent = p
      }
      left.parent = p.parent
      if (p.parent === null) {
        this.root = lefts
      } else if (p.parent.left === p) {
        p.parent.left = left
      } else if (p.parent.right === p) {
        p.parent.right = left
      }
      left.right = p
      p.parent = left
    }
  }
  put (key, value) {
    var t = this.root
    if (t == null) {
      this.root = new Node(key, value === null? key: value, null)
      return 
    }
    // 寻找插入位置
    // 定义一个双亲__指针
    let parent
    if (key === null) {
      return 
    }
    // 沿着根节点寻找插入位置
    const cmp = this.compareFn(key, t.key)
    // do {
      
      // 如果key 大于
      while(t) {
        parent = t
        if (cmp < 0) {
          t = t.left
        } else if (cmp > 0) {
          t = t.right
        } else {
          t.value =  value
          return 
        }
      }
   
     
    // } while (t !== null)
    var node = new Node(key, value === null ? key : value, parent)
    // 如果比较最终落在左子树，则直接将父节点做指针向node
    if (cmp < 0 ) {
      parent.left = node
    } 
    // 如果比较最终在右子树，则直接将父节点右指针指向node
    else {
      parent.right = node
    }
    // 调整
    this.fixAfterPut(node)
  }
  /**
   * 1. 2-3-4 树信泽
   * 2. 新增元素2节点合并（节点中只有1个元素）=3节点（节点中有2个元素） 
   *      ->  红黑树：新增一个红色节点。黑色父节点= 上黑下红（2节点） 不用调整
   * 3. 新增元素与3节点合并（节点中有2个元素） = 4节点(节点中有3个元素) 
   *      -> 这里有4中小情况（左3，右3，还有2个左中右不需要调整）--- 左3，右3需要调整，其余2个不需要调整
   *      红黑树： 新增红色节点 加 上黑下红=排序后中间节点是黑色，两边节点都是红色（4节点3个元素）
   * 4. 新增一个元素 与4节点合并= 原来的4节点(4个元素)分裂，中间元素升级为父节点，新增元素与剩下的元素的其中一个合并
   *      红黑树：新增红色节点，加上爷爷节点黑色，父节点和叔叔节点都是红色 = 爷爷节点变红，符合和叔叔变黑，如果爷爷节点是根节点，变黑色节点
   */
  fixAfterPut (x) {
    x.color = Colors.RED
    // 如果x 节点不是根节点, 而且x节点的父节点 不是红色
    while (x !== null && x !== this.root &&x.parent.color && x.parent.color === Colors.RED) {
      // 左三情况
      // 1. x的父节点是爷爷的左节点
      if (this.parentOf(x) === this.leftOf(this.parentOf(this.parentOf(x)))) {
        // 拿到叔叔节点
        // 在234树中，中间的节点是黑色，而在二叉树中药平衡，必须把中间的变为红色，两边变为黑色
        let y = this.rightOf(this.parentOf(this.parentOf(x)))
        // 如果是叔叔节点是黑色
        if (this.colorOf(y) === Colors.RED) {
          this.setColor(this.parentOf(x), Colors.BLACK)
          this.setColor(y, Colors.BLACK)
          this.setColor(this.parentOf(this.parentOf(x)), Colors.RED)
          x = this.parentOf(this.parentOf(x))
        } else {
          // 左三特殊情况
          if (this.rightOf(this.parentOf(x)) === x) {
             // 如果 x 是parent的右节点, 对parent的进行左旋, 对x进行左旋， 左旋后叶节点就变成 叶节点
             x = this.parentOf(x)
             this.leftRotate(x)
          } 
          // 左三的情况 不是黑色
          this.setColor(this.parentOf(x), Colors.BLACK)
          this.setColor(this.parentOf(this.parentOf(x)), Colors.RED)
          // 要进行右旋， 因为是左倾树
          this.rightRotate(this.parentOf(this.parentOf(x)))
        }
      } else {
        // 右三的情况
        let y = this.leftOf(this.parentOf(this.parentOf(x)))
        if (this.colorOf(y) === Colors.RED) {
          this.setColor(this.parentOf(this.parentOf(x)), Colors.RED)
          this.setColor(this.parentOf(x), Colors.BLACK)
          this.setColor(y, Colors.BLACK)
          // 这里递归一下判断爷爷的颜色
          x = this.parentOf(this.parentOf(x))
        } else {
          if (this.leftOf(this.parentOf(x)) === x) {
            x = this.parentOf(x)
            this.rightRotate(x)
          }
          // 右三的情况
          this.setColor(this.parentOf(x), Colors.BLACK)
          this.setColor(this.parentOf(this.parentOf(x)), Colors.RED)
          this.leftRotate(this.parentOf(this.parentOf(x)))
        }
      }
    }
    this.root.color = Colors.BLACK
  }
  setColor (n, color) {
    if (n) {
      n.color = color
    }
  }
  leftOf (n) {
    return n !== null ? n.left : null
  }
  rightOf (n) {
    return n !== null ? n.right : null
  }
  parentOf (n) {
    return n !== null ? n.parent : null
  }
  colorOf (n) {
    if (n) {
      return n !== null ? n.color : false
    }
  }
}

const r = new RBT()
r.put(1)
r.put(2)
r.put(3)
r.put(4)
r.put(5)
r.put(6)
r.put(7)
r.put(8)
var str = JSON.stringify(r.root.toString())
console.dir(r.root)
console.log(str)
