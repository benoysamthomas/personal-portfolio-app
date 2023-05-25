import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  title = 'json-read-example';
  studentData:any;
  url: string = '/assets/students.json';
  constructor(private http: HttpClient) { }

  getstudents(){
   return  this.http.get(this.url).subscribe(res => {
      this.studentData = res;
    });
  }
}
