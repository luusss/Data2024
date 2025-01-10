class TreeNode {
    constructor(value) {
        this.value = value;  // 節點的值
        this.left = null;    // 左子節點
        this.right = null;   // 右子節點
    }
}

function buildTree(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) {
        return null;
    }

    // The first element in preorder is the root
    const rootValue = preorder[0];
    const root = new TreeNode(rootValue);

    // Find the index of the root in inorder array
    const rootIndexInInorder = inorder.indexOf(rootValue);

    // Elements left of the root in inorder are part of the left subtree
    // Elements right of the root in inorder are part of the right subtree
    const leftInorder = inorder.slice(0, rootIndexInInorder);
    const rightInorder = inorder.slice(rootIndexInInorder + 1);

    // Corresponding preorder slices for left and right subtrees
    // Skip the first element of preorder which is the root
    const leftPreorder = preorder.slice(1, leftInorder.length + 1);
    const rightPreorder = preorder.slice(leftInorder.length + 1);

    // Recursively build the left and right subtrees
    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);

    return root;  //最終返回構建好的二元樹
}

// Example Usage
const preorder = ["A","B","C","D","F","G","H","I","E"];
const inorder = ["B","A","F","D","H","G","I","C","E"];

const root = buildTree(preorder, inorder);

// Function to print the tree in in-order for verification
function inOrderTraversal(node) {
    if (node) {
        inOrderTraversal(node.left);
        console.log(node.value);
        inOrderTraversal(node.right);
    }
}
// Function to visually print the binary tree
function printTree(node, prefix = '', isLeft = true) {
    if (node !== null) {
        console.log(prefix + (isLeft ? '├── ' : '└── ') + node.value);
        printTree(node.left, prefix + (isLeft ? '│   ' : '    '), true);
        printTree(node.right, prefix + (isLeft ? '│   ' : '    '), false);
    }
}
console.log("In-Order Traversal of the Constructed Tree:");
printTree(root); // Should print: 4, 2, 5, 1, 3