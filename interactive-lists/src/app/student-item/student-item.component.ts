import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Student } from './student-model';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.sass']
})
export class StudentItemComponent implements OnInit {
  @HostBinding('attr.class') cssClass = "table-row";
  @Input() student: Student;

  constructor() { 
  }

  ngOnInit(): void {
  }
}
