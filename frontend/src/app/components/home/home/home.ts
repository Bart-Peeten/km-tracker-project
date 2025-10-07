import { Component } from '@angular/core';
import { Toolbar } from "../../km/shared/toolbar/toolbar";
import { ColDef } from 'ag-grid-community';

import { TripData } from '../../../services/home/home-service';
import { FormsModule } from '@angular/forms';
import { DataGrid } from "../../km/shared/data-grid/data-grid";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Toolbar,
    DataGrid,
    FormsModule,
    DataGrid
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  columnDefs: ColDef[] = [
    { field: 'name', editable: true, filter: true },
    { field: 'age', editable: true, filter: 'agNumberColumnFilter' },
    { field: 'email', editable: true, filter: true },
    {
      headerName: 'Acties',
      cellRenderer: (params: any) => {
        const button = document.createElement('button');
        button.innerText = 'Verwijder';
        return button;
      },
      editable: false,
      filter: false,
    }
  ];

  rowData: TripData[] = [];
  newTrip: TripData = { name: '', destination: '' };

  addTripData() {
    console.log('Nieuwe trip toevoegen:', this.newTrip);
    this.rowData = [...this.rowData, { ...this.newTrip }];
    this.newTrip = { name: '', destination: '' };
  }

  onCellValueChanged(event: any) {
    console.log('Cel aangepast:', event.data);
  }
}
