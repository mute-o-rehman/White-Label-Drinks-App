import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() title: string = '';
  @Input() dataSource!: MatTableDataSource<any>; // Accept dataSource as input
  selectedType: string = ''; // Declare selectedType property
  filterValue: string = ''; // Declare filterValue property

  @Output() filterChanged = new EventEmitter<{
    filterValue: string;
    selectedType: string;
  }>();

  constructor() {}

  applyFilter() {
    this.filterChanged.emit({
      filterValue: this.filterValue,
      selectedType: this.selectedType,
    });
  }
}
