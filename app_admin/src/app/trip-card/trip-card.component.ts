import { Component, OnInit, Input } from '@angular/core';
import { Trip } from '../models/trip';
import { Router } from '@angular/router';
import { AuthenticationService } from 'services/authentication.service';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {

  @Input('trip') trip: any;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  private editTrip(trip: Trip): void {
    console.log("trip-card editTrip");
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    this.router.navigate(['edit-trip']);
  }

  private deleteTrip(trip: Trip): void {
    console.log("trip-card editTrip");
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    this.router.navigate(['delete-trip']);
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  

}
