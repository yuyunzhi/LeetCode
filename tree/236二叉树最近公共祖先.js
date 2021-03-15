var lowestCommonAncestor = function(root, p, q) {
  let broot = null; //公共父节点
  let dfs = function(root) { //递归遍历，返回找到pq的数量
    let count = 0; //记录找到几个
    if (root.val == p.val || root.val == q.val) {
      count++; //找到一个
    }
    if (!broot) { //还没有找到结果，继续找
      if (root.left) {
        count += dfs(root.left); //到左子树找，找到加上
      }
      if (!broot && root.right) { //broot有值，证明已经找到了，没有值才继续找
        count += dfs(root.right); //到右子树找，找到加上
      }
      if (!broot && count == 2) { //broot没有值，且找到2个了，证明是第一次找到
        broot = root; //递归是从叶子往上返回结果的，所以第一次找到的是最近的
      }
    }
    return count;
  }
  dfs(root);
  return broot;
};
