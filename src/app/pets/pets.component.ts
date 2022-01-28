import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Animals, PetsService } from './pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  allPets$: Observable<Animals[]>;
  skeletonActivated = true;
  petSelected:  Animals | undefined;

  constructor(private petsService: PetsService) { }

  ngOnInit(): void {
    this.getAnimals();
  }

  updateAnimals(): void {
    this.skeletonActivated = true;
    this.getAnimals();
  }

  getAnimals(): void {
    this.allPets$ = this.petsService.getPets()
    .pipe(
      tap(item => this.skeletonActivated = false));
  }

  openModal(pets: Animals): void {
     this.petSelected = pets;
  }

  closeModal() {
    this.petSelected = undefined;
  }

}
