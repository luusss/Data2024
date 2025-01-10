
class TreeNode {
    constructor(value) {
        this.value = value;  //節點的值
        this.left = null;    // 左子節點
        this.right = null;   // 右子節點
    }
}

function inOrderTraversal(node) {  //中序
    if (node) {
        inOrderTraversal(node.left); // 訪問左子樹
        console.log(node.value);      // 訪問當前節點
        inOrderTraversal(node.right); // 訪問右子樹
    }
}

function preOrderTraversal(node) {  //前序
    if (node) {
        console.log(node.value);      // 訪問當前節點
        preOrderTraversal(node.left); // 訪問左子樹
        preOrderTraversal(node.right); // 訪問右子樹
    }
}

function postOrderTraversal(node) {  //後序
    if (node) {
        postOrderTraversal(node.left); // 訪問左子樹
        postOrderTraversal(node.right); // 訪問右子樹
        console.log(node.value);        // 訪問當前節點
    }
}

 // Creating a simple binary tree 建構一棵二元樹
const root = new TreeNode("A");  //樹根
root.left = nodeB = new TreeNode("B");   //樹根左邊的節點B
root.right = nodeC = new TreeNode("C");  //樹根右邊的節點C
nodeB.right = new TreeNode("D");         //節點B右邊的節點D
nodeC.right = nodeE = new TreeNode("E"); //節點C右邊的節點E
nodeE.left = new TreeNode("F");          //節點E右邊的節點F

// Testing the traversals
console.log("In-Order Traversal:");
inOrderTraversal(root); // Should print: 4, 2, 5, 1, 3

console.log("Pre-Order Traversal:");
preOrderTraversal(root); // Should print: 1, 2, 4, 5, 3

console.log("Post-Order Traversal:");
postOrderTraversal(root); // Should print: 4, 5, 2, 3, 1