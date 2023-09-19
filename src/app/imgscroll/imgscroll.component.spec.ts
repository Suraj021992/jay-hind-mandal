import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgscrollComponent } from './imgscroll.component';

describe('ImgscrollComponent', () => {
  let component: ImgscrollComponent;
  let fixture: ComponentFixture<ImgscrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgscrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
