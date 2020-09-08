import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Team } from "../patterns/team";
import { User } from "../patterns/user";
import { Record } from "../patterns/record";
import { Note } from "../patterns/note";



@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private teamsCollection: AngularFirestoreCollection<Team>;
  teams: Observable<Team[]>;

  private usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  private recordsCollection: AngularFirestoreCollection<Record>;
  records: Observable<Record[]>;

  private notesCollection: AngularFirestoreCollection<Note>;
  notes: Observable<Note[]>;

  // private teamDoc: AngularFirestoreDocument<Team>;
  // team: Observable<Team>;

  constructor(private dataStore: AngularFirestore) {
    this.teamsCollection = dataStore.collection<Team>('teams');
    this.teams = this.teamsCollection.valueChanges();

    this.usersCollection = dataStore.collection<User>('users');
    this.users = this.usersCollection.valueChanges();

    this.recordsCollection = dataStore.collection<Record>('records');
    this.records = this.recordsCollection.valueChanges();

    this.notesCollection = dataStore.collection<Note>('notes');
    this.notes = this.notesCollection.valueChanges();


  }

  addTeam(team: Team) {
    this.teamsCollection.add(team);
  }
  addUser(user: User) {
    this.usersCollection.add(user);
  }
  addRecord(record: Record) {
    this.recordsCollection.add(record);
  }
  addNote(note: Note) {
    this.notesCollection.add(note);
  }

}
