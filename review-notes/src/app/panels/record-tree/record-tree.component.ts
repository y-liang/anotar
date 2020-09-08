import { Component, OnInit } from '@angular/core';

import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

import { RecordNode, RECORD_DATA } from 'src/app/store/mock-data'; // ui purpose data

// import { BoardService } from "../../store/board.service";
// import { TEAM_DOC, USER_DOC, RECORD_DOC, NOTE_DOC, FLAT_DATA } from "../../store/mock-data";
// import { Team } from 'src/app/patterns/team';
// import { Record } from 'src/app/patterns/record';
// import { User } from 'src/app/patterns/user';
// import { Note } from 'src/app/patterns/note';

// [
//   ['teams', [TEAM_DOC, TEAM_DOC]],
//   ['users', [USER_DOC, USER_DOC]],
//   ['records', [RECORD_DOC, RECORD_DOC]],
//   ['notes', [NOTE_DOC, NOTE_DOC]]
// ];


/**
 * TODO
 * organize incoming data to be like nested tree mock data
 */


@Component({
  selector: 'app-record-tree',
  templateUrl: './record-tree.component.html',
  styleUrls: ['./record-tree.component.scss']
})
export class RecordTreeComponent implements OnInit {

  treeControl = new NestedTreeControl<RecordNode>(node => node.descendants);
  dataSource = new MatTreeNestedDataSource<RecordNode>();

  constructor() {
    this.dataSource.data = RECORD_DATA;
  }

  ngOnInit() {

  }

  hasDescendants = (_: number, node: RecordNode) => !!node.descendants && node.descendants.length > 0;
}
