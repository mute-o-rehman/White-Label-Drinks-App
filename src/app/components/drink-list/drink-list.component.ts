import { Component, OnInit, ViewChild } from '@angular/core';
import { DrinkService } from 'src/app/shared/drink.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { HeaderComponent } from '../header/header.component';
import config from '../../../../config.json';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss'],
})
export class DrinkListComponent implements OnInit {
  config: any = config;
  drinks: any[] = [];
  isLoading: boolean = true;
  dataSource = new MatTableDataSource<any>();
  filteredData: any[] = []; // Filtered data array
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private drinkService: DrinkService) {}

  ngOnInit(): void {
    this.fetchDrinks();
  }

  fetchDrinks(): void {
    this.isLoading = true; // Set loading state to true before fetching data
    this.drinkService.getDrinksList().subscribe(
      (data) => {
        this.dataSource.data = data.drinks;
        this.filteredData = data.drinks;
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.error('Error fetching drinks:', error);
      },
      () => {
        this.isLoading = false; // Set loading state to false after data is fetched
      }
    );
  }

  applyFilter(event: { filterValue: string }) {
    const filterValue = event.filterValue.trim().toLowerCase();

    // Filter the data based on filterValue
    this.filteredData = this.dataSource.data.filter((drink: any) => {
      const nameMatch =
        !filterValue || drink.strDrink.toLowerCase().includes(filterValue);
      return nameMatch;
    });

    // Update the paginator's length to reflect the length of the filtered data
    if (this.paginator) {
      this.paginator.firstPage();
    }
  }

  getSlicedData() {
    if (!this.paginator) {
      return []; // Return an empty array if paginator is not yet initialized
    }
    const pageIndex = this.paginator.pageIndex;
    const pageSize = this.paginator.pageSize;
    const startIndex = pageIndex * pageSize;
    const endIndex = startIndex + pageSize;
    return this.filteredData.slice(startIndex, endIndex);
  }
}
