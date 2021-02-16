export class TreeNode {
  id: string | number;
  level = 0;
  title: string;
  parent: TreeNode;
  isLeaf = false;

  isExpanded = false;

  public setExpanded(value: boolean): void {
    this.isExpanded = value;
  }
}
