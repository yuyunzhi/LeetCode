var deleteNode = function(root, key) {
  if (root == null) return null;
  if (root.val === key) {
    if (root.left == null && root.right == null) return null;
    if (root.left == null) return root.right;
    if (root.right == null) return root.left;
    if (root.left != null && root.right != null)  {
      let target = getMinTreeMaxNode(root.left);
      root.val = target.val;
      root.left = deleteNode(root.left, target.val);
    }
  }
  if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  }
  return root;
};
function getMinTreeMaxNode(root) {
  if (root.right == null) return root;
  return getMinTreeMaxNode(root.right);
}
