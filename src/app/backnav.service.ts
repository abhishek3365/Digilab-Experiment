import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class backnavService{

    stateChanged = new Subject<boolean> ();
    
    setBackOption(){
        this.stateChanged.next(true);
    }
    
    removeBackOption(){
        this.stateChanged.next(false);
    }

}