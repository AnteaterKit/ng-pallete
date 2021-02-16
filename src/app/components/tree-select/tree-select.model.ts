
export class TreeNodeFlatten {
  level = 0;
  title: string;
  parent: TreeNode;
}

export class TreeNode {
  level = 0;
  title: string;
  parent: TreeNode;

  isExpanded = false;

  public setExpanded(value: boolean): void {
    this.isExpanded = value;
    console.log( this.isExpanded);
  }
}
