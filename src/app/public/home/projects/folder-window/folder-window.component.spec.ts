import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderWindowComponent } from './folder-window.component';

describe('FolderWindowComponent', () => {
  let component: FolderWindowComponent;
  let fixture: ComponentFixture<FolderWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolderWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
