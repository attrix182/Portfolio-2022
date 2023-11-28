import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-folder-window',
  templateUrl: './folder-window.component.html',
  styleUrls: ['./folder-window.component.scss']
})
export class FolderWindowComponent implements OnInit {
  @Input('category') category: string;
  @Output('closeFolder') closeFolder = new EventEmitter();
  projects: any;

  constructor() {}

  ngOnInit(): void {
    this.setProjectsByCategory(this.category);
  }

  setProjectsByCategory(category: string) {
    switch (category) {
      case 'Aplicaciones':
        this.projects = ['Aplicación 1', 'Aplicación 2', 'Aplicación 3'];
        break;
      case 'Challenges':
        this.projects = ['Challenge 1', 'Challenge 2', 'Challenge 3'];
        break;
  }
}

  close() {
    this.closeFolder.emit();
  }
}
