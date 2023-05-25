import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private experienceUrl = '/assets/experience.json';
  experienceData !: any;
  constructor(private http: HttpClient) { }

  getExperience(){
     this.http.get(this.experienceUrl).subscribe(res => {
     this.experienceData  = res;
     //console.log(this.experienceData);
      return this.experienceData;
    });

  }
}
