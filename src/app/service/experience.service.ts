import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private experienceUrl = '/assets/experience.json';
  experienceData !: any;
  constructor(private http: HttpClient) { }

  getExperience(): Observable<any>{
     return this.http.get<any>(this.experienceUrl)

  }
}
