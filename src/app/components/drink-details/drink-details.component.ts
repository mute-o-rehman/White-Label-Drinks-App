import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DrinkService } from 'src/app/shared/drink.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import config from '../../../../config.json';

@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.scss'],
})
export class DrinkDetailsComponent implements OnInit {
  drinkId: string = '';
  drinkDetails: any;
  detailsConfig: any = config.details;
  spinnerMode: ProgressSpinnerMode;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private drinkService: DrinkService
  ) {
    this.spinnerMode = this.detailsConfig
      .progressSpinnerMode as ProgressSpinnerMode;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.drinkId = params.get('id') || '';
      this.loadDrinkDetails();
    });
  }

  loadDrinkDetails(): void {
    this.drinkService.getDrinkDetails(this.drinkId).subscribe((data) => {
      this.drinkDetails = data.drinks[0];
    });
  }

  getIngredients(drinkDetails: any): string[] {
    const ingredients: string[] = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = drinkDetails[`strIngredient${i}`];
      const measure = drinkDetails[`strMeasure${i}`];
      if (ingredient && measure) {
        ingredients.push(`${ingredient} - ${measure}`);
      }
    }
    return ingredients;
  }

  goToHomePage(): void {
    this.router.navigate(['/']);
  }
}
