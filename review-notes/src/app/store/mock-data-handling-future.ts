import { Component, OnInit, Injectable } from '@angular/core';
import { BoardService } from "./board.service";
import { TEAM_DOC, USER_DOC, RECORD_DOC, NOTE_DOC, FLAT_DATA } from "./mock-data";

/** for future data binding to server */

@Component({
   selector: 'app-left-part',
   templateUrl: './left-part.component.html',
   styleUrls: ['./left-part.component.scss']
})
export class MockLeftPartComponent implements OnInit {

   teams;
   users;
   records;
   notes;

   constructor(private boardService: BoardService) {


   }

   ngOnInit() {
      this.getTeams();
      this.getUsers();
      this.getRecords();
      this.getNotes();

   }


   addTeam() {
      this.boardService.addTeam(TEAM_DOC);
   }

   addUser() {
      this.boardService.addUser(USER_DOC);
   }

   addRecord() {
      this.boardService.addRecord(RECORD_DOC);
   }

   addNote() {
      this.boardService.addNote(NOTE_DOC);
   }





   getTeams() {
      console.log('this.boardService.teams');
      console.log(this.boardService.teams);
      this.teams = this.boardService.teams;
   }

   getUsers() {
      this.users = this.boardService.users;
   }

   getRecords() {
      this.records = this.boardService.records;
   }

   getNotes() {
      this.notes = this.boardService.notes;
   }



};
