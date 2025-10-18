import { Component } from '@angular/core';
import { Toolbar } from "../../km/shared/toolbar/toolbar";
import { ColDef } from 'ag-grid-community';

import { TripData } from '../../../services/home/home-service';
import { FormsModule } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

interface IRow {
  datum: string;         // voor weergave in grid
  destination: string;
  rawDate: Date;          // voor filtering
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Toolbar,
    FormsModule,
    AgGridAngular
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  // Data
  rowData: IRow[] = [
    { datum: "08/10/2025", destination: "Dr Sliwinski", rawDate: new Date(2025, 9, 8) },
    { datum: "10/10/2025", destination: "Pony club", rawDate: new Date(2025, 9, 10) },
    { datum: "12/10/2025", destination: "Spelen Catalya", rawDate: new Date(2025, 9, 12) },
  ];

  filteredData: IRow[] = [...this.rowData];

  colDefs: ColDef<IRow>[] = [
    { field: "datum", headerName: "Datum" },
    { field: "destination", headerName: "Bestemming" },
  ];

  defaultColDef: ColDef = { flex: 1 };

  // Form velden
  newDatum: string = ''; // gebonden aan <input type="date">
  newDestination: string = '';

  // Maandfilter
  selectedMonth: string = ''; // bv. "2025-10"
  displayMonth: string = '';

  addRow() {
    if (!this.newDatum || !this.newDestination) return;

    const dateObj = new Date(this.newDatum); // input type="date" geeft YYYY-MM-DD
    const formatted = `${String(dateObj.getDate()).padStart(2, '0')}/` +
      `${String(dateObj.getMonth() + 1).padStart(2, '0')}/` +
      `${dateObj.getFullYear()}`;

    this.rowData.push({ datum: formatted, destination: this.newDestination, rawDate: dateObj });
    this.newDatum = '';
    this.newDestination = '';
    this.filterByMonth();
  }

  filterByMonth() {
    if (!this.selectedMonth) {
      this.filteredData = [...this.rowData];
      this.displayMonth = '';
      return;
    }

    const [yearStr, monthStr] = this.selectedMonth.split('-');
    const year = Number(yearStr);
    const month = Number(monthStr);

    this.filteredData = this.rowData.filter(row => {
      return row.rawDate.getFullYear() === year && (row.rawDate.getMonth() + 1) === month;
    });

    const monthNames = [
      'Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni',
      'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'
    ];
    this.displayMonth = `${monthNames[month - 1]} ${year}`;
  }
}
