import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


export interface Animals {
  id: string;
  type: string;
  avatar: string;
  name: string;
}

interface AnimalsItems {
  items: Animals[];
}

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private httpClient: HttpClient) { }

  getPets(): Observable<Animals[]> {
    return this.httpClient.get<AnimalsItems>( `${environment.url}/animals`)
    .pipe(
      map((pets: AnimalsItems) => {
        return pets.items;
      }));
  }

}
