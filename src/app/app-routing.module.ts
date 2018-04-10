import { NgModel } from "@angular/forms";
import { Routes, RouterModule, Router } from "@angular/router"
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DigilabComponent } from "./digilab/digilab.component";
import { SessionsComponent } from "./sessions/sessions.component";
import { AboutComponent } from "./about/about.component";
import { DigilabListComponent } from "./digilab/digilab-list/digilab-list.component";
import { DigilabEditComponent } from "./digilab/digilab-edit/digilab-edit.component";
import { SessionEditComponent } from "./sessions/session-edit/session-edit.component";
import { SessionListComponent } from "./sessions/session-list/session-list.component";
import { SessionDetailComponent } from "./sessions/session-detail/session-detail.component";

const appRoutes : Routes =  [
    { path : ''  , redirectTo : "/about" ,  pathMatch : 'full' ,},
    { path : 'digilab' , component : DigilabComponent ,  children : [
        { path : '' , component : DigilabListComponent } ,
        { path : 'new' , component : DigilabEditComponent } ,
    ]  },
    { path : 'sessions' , component : SessionsComponent ,children : [
        { path : '' , component : SessionListComponent } ,
        { path : 'new' , component : SessionEditComponent } ,
        { path : 'detail' , component : SessionDetailComponent } ,
    ]  }  ,
    { path : 'about' , component : AboutComponent   }
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})
export class AppRoutingModule {

}
