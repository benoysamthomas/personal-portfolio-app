import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentService } from 'src/app/service/student.service';
@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
 // title = 'json-read-example';
  studentData:any;
 // url: string = '/assets/students.json';

  constructor(private http: HttpClient, private studentService: StudentService) {}

  ngOnInit() {
 this.studentData= this.studentService.getstudents();
 //console.log(this.studentData);
  }

}
