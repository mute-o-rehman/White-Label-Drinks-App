import { Component, OnInit, ViewChild } from '@angular/core';
import { DrinkService } from 'src/app/shared/drink.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss'],
})
export class DrinkListComponent implements OnInit {
  drinks: any[] = [];
  isLoading: boolean = true;
  dataSource = new MatTableDataSource<any>();
  filteredData: any[] = []; // Filtered data array
  displayedColumns: string[] = ['name', 'image'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private drinkService: DrinkService) {}

  ngOnInit(): void {
    this.fetchDrinks();
  }

  fetchDrinks(): void {
    this.drinkService.getDrinksList().subscribe((data) => {
      this.dataSource.data = data.drinks;
      this.filteredData = data.drinks; // Initialize filteredData with all data
      this.dataSource.paginator = this.paginator;
      this.isLoading = false;
    });
  }

  applyFilter(event: { filterValue: string; selectedType: string }) {
    const filterValue = event.filterValue.trim().toLowerCase();
    const selectedType = event.selectedType.toLowerCase();

    // Filter the data based on filterValue and selectedType
    this.filteredData = this.dataSource.data.filter((drink: any) => {
      const nameMatch =
        !filterValue || drink.strDrink.toLowerCase().includes(filterValue);
      const typeMatch =
        !selectedType || drink.strDrinkType.toLowerCase() === selectedType;
      return nameMatch && typeMatch;
    });

    // Update the paginator's length to reflect the length of the filtered data
    this.paginator.length = this.filteredData.length;

    // Navigate to the first page of the paginator
    if (this.paginator) {
      this.paginator.firstPage();
    }
  }
  getSlicedData() {
    const pageIndex = this.paginator.pageIndex;
    const pageSize = this.paginator.pageSize;
    const startIndex = pageIndex * pageSize;
    const endIndex = startIndex + pageSize;
    return this.filteredData.slice(startIndex, endIndex);
  }
}
