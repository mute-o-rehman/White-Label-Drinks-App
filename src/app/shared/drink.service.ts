import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DrinkService {
  constructor(private http: HttpClient) {}

  getDrinksList(): Observable<any> {
    return this.http.get(
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
    );
  }

  getDrinkDetails(drinkId: string): Observable<any> {
    return this.http.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
    );
  }
}
