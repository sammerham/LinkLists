class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
};
class BST {
  constructor() {
    this.root = null;
  };
  insert(val) {
    const newNode = new Node(val);
    // if BST is empty
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let curr = this.root;
    while (true) {
      if (val === curr.val) return undefined;
      // go right if val is bigger than curr
      if (val > curr.val) {
        // check if there right
        if (!curr.right) {
          curr.right = newNode;
          return this;
        }
        //                 traverse
        curr = curr.right;
      } else {
        //go left
        if (!curr.left) {
          curr.left = newNode;
          return this;
        }
        // traverse
        curr = curr.left;
      }
    }
  }
  find(val) {
    // if BST is empty
    if (!this.root) return false;
    let curr = this.root;
    let found = false;
    while (curr && !found) {
      if (val < curr.val) {
        curr = curr.left;
      } else if (val > curr.val) {
        curr = curr.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return curr;
  }
  contains(val) {
    // if BST is empty
    if (!this.root) return false;
    let curr = this.root;
    let found = false;
    while (curr && !found) {
      if (val < curr.val) {
        curr = curr.left;
      } else if (val > curr.val) {
        curr = curr.right;
      } else {
        return true;
      }
    }
    return false;
  }

  BFS() {
    let data = [];
    let queue = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
};
const tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS())
// console.log(tree.contains(114));

