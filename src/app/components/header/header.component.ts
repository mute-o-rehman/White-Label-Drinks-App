import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import config from '../../../../config.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  config = config;
  @Input() title: string = config.header.title || '';
  backgroundColor: string = config.header.backgroundColor || '#343a40';
  textColor: string = config.header.textColor || '#ffffff';

  //@Input() title: string = '';
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
