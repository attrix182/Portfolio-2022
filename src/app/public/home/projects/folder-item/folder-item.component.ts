import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-folder-item',
  templateUrl: './folder-item.component.html',
  styleUrls: ['./folder-item.component.scss']
})
export class FolderItemComponent implements OnInit {
  @Input('category') category: any;
  showFolder= false;

  constructor() { }

  ngOnInit(): void {
  }

  openFolder(){
    this.showFolder = !this.showFolder;
  }

  closeFolder(){
    this.showFolder = !this.showFolder;
  }

}
