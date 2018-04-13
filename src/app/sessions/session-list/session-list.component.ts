import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css'] ,
  encapsulation : ViewEncapsulation.None
})
export class SessionListComponent implements OnInit {

  constructor() { }

  sessions : any;
  activeList : any[]; 
  displayedList : any[];
  selectedIndex : number;
  

  ngOnInit() {
  
    this.sessions = { 'For Initiator' :  [ { name : 'Past Date Session' , status : 'PAST_DATE' } , 
    { name : 'Draft Session' , status : 'DRAFT' } ,
    { name : 'Submitted Session' , status : 'SUBMITTED' } ,
    { name : 'Confirmend Session' , status : 'CONFIRMED' } , 
    { name : 'Rejected Session' , status : 'REJECTED' } ,
    { name : 'Cancelled Session' , status : 'CANCELLED' } ] , 
    'For Host' :  [ { name : 'Past Date Session 1'  , status : 'PAST_DATE' } , 
    { name : 'Draft Session 1' , status : 'DRAFT' } ,
    { name : 'Submitted Session 1' , status : 'SUBMITTED' } ,
    { name : 'Confirmend Session 1' , status : 'CONFIRMED' } , 
    { name : 'Rejected Session 1' , status : 'REJECTED' } ,
    { name : 'Cancelled Session 1' , status : 'CANCELLED' } ]  }; 

    this.activeList = this.sessions['For Initiator'];
    this.selectedIndex = 1;
    this.onSessionsTabsChange(1);

  }

  onSessionsTabsChange( index ){

    if( index == 0 ){
      this.displayedList = this.activeList.filter( (session) => session.status === 'CONFIRMED' )
    }
    if( index == 1 ){
      this.displayedList = this.activeList.filter( (session) => session.status === 'DRAFT' || session.status === 'SUBMITTED' || session.status === 'REJECTED' )
    }
    if( index == 2 ){
      this.displayedList = this.activeList.filter( (session) => session.status === 'PAST_DATE' || session.status === 'CANCELLED' )
    }

  }

  onUserTabChange(index){
    if( index == 0 )
      this.activeList = this.sessions['For Initiator'];
    if( index == 1 )
      this.activeList = this.sessions['For Host'];
    this.onSessionsTabsChange(this.selectedIndex);
  }

}
