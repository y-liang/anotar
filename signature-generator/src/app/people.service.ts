import { Injectable } from '@angular/core';
import { Person } from 'src/app/person';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  employees: Person[] = [];

  // constructor() { }

  addToPeople(employee: Person) {
    this.employees.push(employee); // empolyee is an object by type, Person is just the shape of the object
  }


  getEmployee(): Person {
    return this.employees[this.employees.length - 1]; // pop() removes the last element of an array and returns that element
  }
}


