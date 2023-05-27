import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/service/experience.service';
import { of } from 'rxjs';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience!: any;

 //  experienceUrl: string = '/src/apiservices/experience.json';
constructor(private experienceService: ExperienceService) { }
 // constructor(private http: HttpClient) {}
  ngOnInit() {
  this.experience= this.experienceService.getExperience().subscribe(data => {
    const response=[];
    for(let key in data){

   // console.log(key);
      const responseItem={
        id:key,
        ...data[key]
      }

      response.push(responseItem);
    //  console.log(response);
      this.experience=response;
    console.log(this.experience);
  }

  });


  }

}
