import { NgModel } from "@angular/forms";
import { Routes, RouterModule, Router } from "@angular/router"
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DigilabComponent } from "./digilab/digilab.component";
import { SessionsComponent } from "./sessions/sessions.component";
import { AboutComponent } from "./about/about.component";

const appRoutes : Routes =  [
    { path : ''  , redirectTo : "/about" ,  pathMatch : 'full' },
    { path : 'digilab' , component : DigilabComponent  },
    { path : 'sessions' , component : SessionsComponent },
    { path : 'about' , component : AboutComponent }
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})
export class AppRoutingModule {

}
