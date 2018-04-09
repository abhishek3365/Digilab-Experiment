import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { backnavService } from './backnav.service';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnDestroy {
  mobileQuery: MediaQueryList;
  displayStatus = 'none';

  subscription : Subscription;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher , 
    private backnavService : backnavService ,
    private location: Location ) {
    
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.subscription =  backnavService.stateChanged.subscribe( ( isActive : boolean ) => {
      if(isActive)
        this.displayStatus = 'inline';
      else
        this.displayStatus = 'none';
    } );

  }

  ngOnInit(){

  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.subscription.unsubscribe();
  }

  goBack(){
    this.location.back();
  }
}
