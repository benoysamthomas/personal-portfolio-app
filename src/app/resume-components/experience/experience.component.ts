import { Component } from '@angular/core';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences!: [];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.experienceService.getExperience()
      .subscribe(experiences => {
        this.experiences = experiences;
      });
  }

}