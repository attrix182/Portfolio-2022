import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      name: 'Sala de juegos',
      description: 'lorem ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      linkDemo: 'project1',
      linkRepo: 'project1',
    },
    {
      name: 'Project 2',
      description: 'lorem ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      linkDemo: 'project1',
      linkRepo: 'project1',
    },
    {
      name: 'Project 3',
      description: 'lorem ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      linkDemo: 'project1',
      linkRepo: 'project1',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
