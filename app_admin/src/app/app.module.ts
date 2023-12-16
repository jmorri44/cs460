import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { TripCardComponent } from './trip-card/trip-card.component';
import { TripDataService } from 'services/trip-data.service';
import { AddTripComponent } from './add-trip/add-trip.component';
import { AppRoutingModule } from './app-router.module';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { DeleteTripComponent } from './deletetrip/deletetrip.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    TripListingComponent,
    TripCardComponent,
    AddTripComponent,
    EditTripComponent,
    DeleteTripComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent


  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TripDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
