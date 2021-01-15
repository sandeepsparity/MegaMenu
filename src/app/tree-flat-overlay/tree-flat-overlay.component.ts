import {ArrayDataSource} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Input, Output, EventEmitter} from '@angular/core';


const TREE_DATA: FlatNode[] = [
  {
    name: 'Fruit',
    expandable: true,
    level: 0,
  }, {
    name: 'Apple',
    expandable: true,
    level: 1,
  }, {
    name: 'Banana',
    expandable: true,
    level: 1,
  }, {
    name: 'Fruit loops',
    expandable: true,
    level: 1,
  }, {
    name: 'Vegetables',
    expandable: true,
    level: 0,
  }, {
    name: 'Green',
    expandable: true,
    level: 1,
  }, {
    name: 'Broccoli',
    expandable: true,
    level: 2,
  }, {
    name: 'Brussels sprouts',
    expandable: true,
    level: 2,
  }, {
    name: 'Orange',
    expandable: true,
    level: 1,
  }, {
    name: 'Pumpkins',
    expandable: true,
    level: 2,
  }, {
    name: 'Carrots',
    expandable: true,
    level: 2,
  }
];

/** Flat node with expandable and level information */
interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
  isExpanded?: boolean;
}

/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'app-tree-flat-overlay',
  templateUrl: 'tree-flat-overlay.component.html',
  styleUrls: ['tree-flat-overlay.component.scss'],
})
export class TreeFlatOverlayComponent {
  @Input() dataSource: FlatNode[];
  @Input() inputSearchText: string;
  @Output() dataSourceEmit = new EventEmitter<FlatNode>();
  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level, node => node.expandable);

  hasChild = (_: number, node: FlatNode) => node.expandable;

  getParentNode(node: FlatNode) {
    const nodeIndex = TREE_DATA.indexOf(node);

    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (TREE_DATA[i].level === node.level - 1) {
        return TREE_DATA[i];
      }
    }

    return null;
  }

  shouldRender(node: FlatNode) {
    let parent = this.getParentNode(node);
    while (parent) {
      if (!parent.isExpanded) {
        return true;
      }
      parent = this.getParentNode(parent);
    }
    return true;
  }
  onTreeNodeClick(node){
    this.dataSourceEmit.emit(node)
  }
}



