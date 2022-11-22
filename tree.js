/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */
  sumValues() {
    if (!this.root) return 0;
    let total = this.root.val; 
    function sum(node){
      for (let child of node.children){
        total += child.val;
        if (child.children.length >0){
          sum(child);
        }
      }
    }
    sum(this.root);
    return total; 
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(!this.root) return 0;
    let total = 0;
    function evens(node){
      for(let child of node.children){
        if(child.val%2===0){
          total+=1;
        }
        if(child.children.length > 0){
          evens(child);
        }
      }
    }
    evens(this.root);
    return total;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!this.root) return 0;
    let total = this.root.val > lowerBound ? 1 : 0; 
    function bound(node){
      for(let child of node.children){
        if(child.val > lowerBound){
          total += 1;
        }
        if(child.children.length>0){
          bound(child);
        }
      }
    }
    bound(this.root);
    return total;
  }
}

module.exports = { Tree, TreeNode };
