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
  experience!: any[];

 //  experienceUrl: string = '/src/apiservices/experience.json';
constructor(private experienceService: ExperienceService) { }
 // constructor(private http: HttpClient) {}
  ngOnInit() {
   this.experienceService.getExperience().subscribe(data => {
   this.experience= data
  // console.log(this.experience);
  } );
  }

}
