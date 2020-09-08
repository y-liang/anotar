import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { Person } from 'src/app/person';
import { PeopleService } from 'src/app/people.service';

@Component({
  selector: 'app-version-march',
  templateUrl: './version-march.component.html',
  styleUrls: ['./version-march.component.scss']
})
export class VersionMarchComponent implements OnInit {

  aPerson: Person;
  mainForm: FormGroup;

  // noTitle: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private peopleService: PeopleService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.mainForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      jobTitle: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      emailAddress: ['', Validators.required],

      toggleTitle: [false]
    });
  }

  get fullName() { return this.mainForm.get('fullName'); }
  get jobTitle() { return this.mainForm.get('jobTitle'); }
  get phoneNumber() { return this.mainForm.get('phoneNumber'); }
  get emailAddress() { return this.mainForm.get('emailAddress'); }

  get toggleTitle() { return this.mainForm.get('toggleTitle'); }



  onSubmit() {
    this.aPerson = {
      name: this.fullName.value,
      title: this.jobTitle.value,
      phone: this.phoneNumber.value,
      email: this.emailAddress.value
    };

    this.peopleService.addToPeople(this.aPerson);
    console.log(this.toggleTitle);
  }

}

