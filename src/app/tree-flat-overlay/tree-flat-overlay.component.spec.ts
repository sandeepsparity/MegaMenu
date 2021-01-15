import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeFlatOverlayComponent } from './tree-flat-overlay.component';

describe('TreeFlatOverlayComponent', () => {
  let component: TreeFlatOverlayComponent;
  let fixture: ComponentFixture<TreeFlatOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeFlatOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeFlatOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
