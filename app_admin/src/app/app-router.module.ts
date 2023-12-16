import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { TripListingComponent } from "./trip-listing/trip-listing.component";
import { AddTripComponent } from "./add-trip/add-trip.component";
import { EditTripComponent } from "./edit-trip/edit-trip.component";
import { DeleteTripComponent } from "./deletetrip/deletetrip.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";


const routes: Routes = [
    { path: 'add-trip', component: AddTripComponent},
    {path: 'edit-trip', component: EditTripComponent},
    {path: 'delete-trip', component: DeleteTripComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '', component: TripListingComponent, pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}