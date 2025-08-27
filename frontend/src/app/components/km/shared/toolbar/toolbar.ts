import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'; 

@Component({
  selector: 'app-toolbar',
  imports: [
    MatToolbarModule,
  ],
  standalone:true,
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css'
})
export class Toolbar {
  appTitle="KM-Tracker";

}
