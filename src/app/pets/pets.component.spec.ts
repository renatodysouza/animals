import { ScrollingModule } from '@angular/cdk/scrolling';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Title, Meta } from '@angular/platform-browser';
import { of } from 'rxjs';

import { PetsComponent } from './pets.component';
import { PetsService } from './pets.service';

describe('PetsComponent', () => {
  let component: PetsComponent;
  let fixture: ComponentFixture<PetsComponent>;
  let petServiceMock = {
    getPets: () => {
      return of([
        {
          avatar: '',
          type: '',
          name: ''
        }
      ]);
    }
  };

  let titleServiceMock = {
    setTitle: () => {},
  };
  let metaServiceMock = {
    updateTag: ()=> {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ScrollingModule],
      declarations: [ PetsComponent ],
      providers: [
        {provide: PetsService, useValue: petServiceMock},
        {provide: Title, useValue: titleServiceMock},
        {provide: Meta, useValue: metaServiceMock},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('should exist  section element', () => {
    const tag = fixture.nativeElement as HTMLElement;
    expect(tag.querySelector('section')).toBeTruthy();
  });

  it('should exist  group-header class', () => {
    const tag = fixture.nativeElement as HTMLElement;
    expect(tag.querySelector('.group-header')).toBeTruthy();
  });

  it('should exist  h1 element', () => {
    const tag = fixture.nativeElement as HTMLElement;
    expect(tag.querySelector('h1')).toBeTruthy();
  });

  it('should h1 contains Amazing Animals text', () => {
    const tag = fixture.nativeElement as HTMLElement;
    expect(tag.querySelector('h1')?.textContent).toEqual('Amazing Animals');
  });

  it('should exist container-main class', () => {
    const tag = fixture.nativeElement as HTMLElement;
    expect(tag.querySelector('.container-main')).toBeTruthy();
  });

  it('should exist scroll-main class', () => {
    const tag = fixture.nativeElement as HTMLElement;
    expect(tag.querySelector('.scroll-main')).toBeTruthy();
  });

  it('should exist app-skeleton component', () => {
    const tag = fixture.nativeElement as HTMLElement;
    component.skeletonActivated = true;
    fixture.detectChanges();
    expect(tag.querySelector('app-skeleton')).toBeTruthy();
  });

  it('should call getAnimals in ongInt', () => {
    spyOn(component, 'getAnimals');
    component.ngOnInit();
    expect(component.getAnimals).toHaveBeenCalled();
  });

  it('should click in updateAnimals getAnimals is called', () => {
    spyOn(component, 'getAnimals');
    component.updateAnimals();
    expect(component.getAnimals).toHaveBeenCalled();
  });

  it('should click in openModal modal is opened', () => {
    const tag = fixture.nativeElement as HTMLElement;
    component.openModal({type: 'dog', avatar: '', id: '1',name: 'dg' });
    fixture.detectChanges();
    expect(tag.querySelector('.modal-pet')).toBeTruthy();
  });

  it('should click in closeModal modal is closed', () => {
    const tag = fixture.nativeElement as HTMLElement;
    component.closeModal();
    fixture.detectChanges();
    expect(tag.querySelector('.modal-pet')).toBeFalsy();
  });
});
