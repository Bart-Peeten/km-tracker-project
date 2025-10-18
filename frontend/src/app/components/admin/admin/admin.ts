import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from "ag-grid-angular";
import type { ColDef } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { FormsModule } from '@angular/forms';
import { Toolbar } from '../../km/shared/toolbar/toolbar';

interface IRow {
  distance: string;
  destination: string;
}

@Component({
  selector: 'app-admin',
  imports: [AgGridAngular, FormsModule, CommonModule, Toolbar],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {

  // Data
  rowData: IRow[] = [
    { destination: "Dr Sliwinski", distance: "20km" },
    { destination: "Pony club", distance: "5km" },
    { destination: "Spelen Catalya", distance: "35km" },
  ];

  filteredData: IRow[] = [...this.rowData];

  colDefs: ColDef<IRow>[] = [
    { field: "destination", headerName: "Bestemming" },
    { field: "distance", headerName: "Afstand" },
  ];

  defaultColDef: ColDef = { flex: 1 };

  // Form velden
  newDistance: string = '';
  newDestination: string = '';

  // Maandfilter
  selectedMonth: string = ''; // bv. "2025-10"
  displayMonth: string = '';

  addRow() {
    if (!this.newDistance || !this.newDestination) return;

    this.rowData.push({ distance: this.newDistance, destination: this.newDestination });
    this.newDistance = '';
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

    const monthNames = [
      'Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni',
      'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'
    ];
    this.displayMonth = `${monthNames[month - 1]} ${year}`;
  }

}
