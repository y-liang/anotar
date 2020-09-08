import { Component, OnInit, Injectable } from '@angular/core';
import { BoardService } from "../../store/board.service";
import { TEAM_DOC, USER_DOC, RECORD_DOC, NOTE_DOC, FLAT_DATA } from "../../store/mock-data";



@Component({
  selector: 'app-left-part',
  templateUrl: './left-part.component.html',
  styleUrls: ['./left-part.component.scss']
})
export class LeftPartComponent implements OnInit {

  team = TEAM_DOC;
  user = USER_DOC;
  record = RECORD_DOC;
  note = NOTE_DOC;

  // constructor(private boardService: BoardService) {


  // }

  ngOnInit() {


  }



};
