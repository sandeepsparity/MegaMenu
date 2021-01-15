import { Component } from '@angular/core';
import {ArrayDataSource} from '@angular/cdk/collections';

const TREE_DATA: FlatNode[] = [
  {
    name: 'Pillar 1',
    expandable: true,
    level: 0,
    isSelected: false
  }, {
    name: 'U2',
    expandable: true,
    level: 1,
    isSelected: false
  }, {
    name: 'U1',
    expandable: true,
    level: 1,
    isSelected: false
  }, 
  {
    name: 'U3',
    expandable: true,
    level: 1,
    isSelected: false
  },
  {
    name: 'T0',
    expandable: true,
    level: 2,
    isSelected: false
  },
  {
    name: 'T1',
    expandable: true,
    level: 2,
    isSelected: false
  },
  {
    name: 'T2',
    expandable: true,
    level: 2,
    isSelected: false
  },
  {
    name: 'T3',
    expandable: true,
    level: 2,
    isSelected: false
  },
  {
    name: 'T4',
    expandable: true,
    level: 2,
    isSelected: false
  },
];

const TREE_DATA2: FlatNode[] = [
  {
    name: 'Pillar 2',
    expandable: true,
    level: 0,
    isSelected: true
  }, {
    name: 'U4',
    expandable: true,
    level: 1,
    isSelected: false
  }, {
    name: 'U5',
    expandable: true,
    level: 1,
    isSelected: false
  }, 
  {
    name: 'U6',
    expandable: true,
    level: 1,
    isSelected: false
  },
  {
    name: 'T5',
    expandable: true,
    level: 2,
    isSelected: false
  },
  {
    name: 'T6',
    expandable: true,
    level: 2,
    isSelected: false
  },
  {
    name: 'T7',
    expandable: true,
    level: 2,
    isSelected: false
  },
  {
    name: 'T8',
    expandable: true,
    level: 2,
    isSelected: false
  },
  {
    name: 'T9',
    expandable: true,
    level: 2,
    isSelected: false
  },
];

/** Flat node with expandable and level information */
interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
  isExpanded?: boolean;
  isSelected?: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mega-menu';
  value = '';
  selectedNode = '';
  treeData:any[] = [TREE_DATA,TREE_DATA2];
  dataSources = this.treeData.map((tree)=>{
    return new ArrayDataSource(tree)
  }); 

  handleSourceEvent(event:FlatNode){
    this.selectedNode = event.name;
  }
  filterChanged(data){
    const value = data?.target.value;
    const updatedDataSource = [];
    if(value.length === 0 || value?.trim().length === 0){
      this.dataSources = this.treeData
      return; 
    }
    this.treeData.forEach((tree)=>{
      let data = tree.filter((node)=> node.name.toUpperCase().includes(value.toUpperCase()))
      if(Array.isArray(data) && data.length > 0){
        updatedDataSource.push(new ArrayDataSource(tree));
      }
    });
    this.dataSources = updatedDataSource;
  }
}
