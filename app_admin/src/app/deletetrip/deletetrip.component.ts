import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripDataService } from 'services/trip-data.service';
import { Trip } from '../models/trip';


@Component({
  selector: 'app-deletetrip',
  templateUrl: './deletetrip.component.html',
  styleUrls: ['./deletetrip.component.css']
})
export class DeleteTripComponent implements OnInit {

  constructor(
    private router: Router,
    private tripService: TripDataService
  ) { }

  ngOnInit() {
    let tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
      alert("Something wrong: Cannot locate stashed tripcode");
      this.router.navigate(['']);
      return;
    }

    console.log("DeleteTripComponent found tripCode " + tripCode);

    this.tripService.deleteTrip(tripCode)
      .then( data => {
        console.log(data);
        this.router.navigate(['']);
        return;
      });
  }

}
