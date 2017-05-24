import { Injectable } from '@angular/core';
import { Project } from './../project.model';

@Injectable()
export class ProjectService {
  constructor() { }

  private projects: Project[] = [
      new Project('IBM', 'GRP', 34765),
      new Project('Microsoft', 'Russia Privacy', 45681),
      new Project('CNBC', 'Iconic', 89372),
    ];

  getProjects() {
    return this.projects;
  }

  getProject(index: number) {
    return this.projects[index];
  }

}
