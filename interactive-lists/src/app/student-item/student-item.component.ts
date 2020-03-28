import { Component, OnInit, Input} from '@angular/core';
import { Student } from './student-model';

@Component({
  selector: 'tr[app-student-item]',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.sass']
})
export class StudentItemComponent implements OnInit {
  @Input() student: Student;

  constructor() { 
  }

  ngOnInit(): void {
  }
}
