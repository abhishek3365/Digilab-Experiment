import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css'] ,
  encapsulation : ViewEncapsulation.None
})
export class SessionsComponent implements OnInit {

  constructor( ) { 
  }

  ngOnInit() {
  }

}
