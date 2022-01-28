import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from '../core/components/header/header.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent, HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should exist app-header component', () => {
    const tag = fixture.nativeElement as HTMLElement;
    expect(tag.querySelector('app-header')).toBeTruthy();
  });

  it('should exist main element', () => {
    const tag = fixture.nativeElement as HTMLElement;
    expect(tag.querySelector('main')).toBeTruthy();
  });

  it('should exist app-pets component', () => {
    const tag = fixture.nativeElement as HTMLElement;
    expect(tag.querySelector('app-pets')).toBeTruthy();
  });

  it('should exist app-footer component', () => {
    const tag = fixture.nativeElement as HTMLElement;
    expect(tag.querySelector('app-header')).toBeTruthy();
  });
});
