import { Injectable } from '@angular/core';

export interface TripData {
  name: string;
  destination: string;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

}
