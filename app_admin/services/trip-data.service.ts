import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Trip } from '../src/app/models/trip';
import { User } from 'src/app/models/user';
import { Authresponse } from 'src/app/models/authresponse';
import { BROWSER_STORAGE } from 'src/app/storage';
import { Headers } from '@angular/http';

@Injectable()
export class TripDataService {

  constructor(private http: Http,
    @Inject(BROWSER_STORAGE) private storage: Storage) { }

  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripURL = `${this.apiBaseUrl}trips/`;


  public getTrips(): Promise<Trip[]> {
    console.log('Inside TripDataService#getTrips');
    return this.http
      .get(`${this.apiBaseUrl}trips`)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  public addTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#AddTrip');

    const headers = new Headers({

      "Content-Type": "application/json",

      Authorization: `Bearer ${localStorage.getItem("travlr-token")}`,

    });

    return this.http
      .post(this.tripURL, formData, {headers: headers})
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  public getTrip(tripCode: string): Promise<Trip> {
    console.log('Inside TripDataService#getTrip');
    return this.http
      .get(this.tripURL + tripCode)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  public deleteTrip(tripCode: string): Promise<Trip> {
    console.log('Inside TripDataService#deleteTrip');

    const headers = new Headers({

      "Content-Type": "application/json",

      Authorization: `Bearer ${localStorage.getItem("travlr-token")}`,

    });
    return this.http
      .delete(this.tripURL + tripCode, {headers: headers})
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  public updateTrip(formData: Trip): Promise<Trip> {

    const headers = new Headers({

      "Content-Type": "application/json",

      Authorization: `Bearer ${localStorage.getItem("travlr-token")}`,

    });

    console.log('Inside TripDataService#UpdateTrip');
    return this.http
      .put(this.tripURL + formData.code, formData, {headers: headers})
      .toPromise()
      .then(response => response.json() as Trip [])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

  public login(user: User): Promise<Authresponse> {
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<Authresponse> {
    return this.makeAuthApiCall('register', user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<Authresponse> {
    console.log('Inside makeAuthApiCall');
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http
      .post(url, user)
      .toPromise()
      .then((response) => response.json() as Authresponse)
      .catch(this.handleError);
  }

}
