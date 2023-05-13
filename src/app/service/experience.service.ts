import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http: HttpClient) { }

  getExperience(): Observable<any> {
    return this.http.get<any>('apiservices/experience.json')
      .pipe(
        map(response => response.experienceList)

      );
  }
}
