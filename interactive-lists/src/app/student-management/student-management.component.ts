import { Component, OnInit } from '@angular/core';
import { Student } from '../student-item/student-model';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.sass']
})
export class StudentManagementComponent implements OnInit {
  students: Student[];

  constructor() { 
   this.students = [];
  }

  addStudent (name: HTMLInputElement, surname: HTMLInputElement, id: HTMLInputElement) {
    this.students.push(new Student(`${name.value}`, `${surname.value}`, `${id.value}`));
    name.value = '';
    surname.value = '';
    id.value = '';
  }

  ngOnInit(): void {
  }

}
