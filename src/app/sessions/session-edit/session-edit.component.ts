import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DigilabComponent } from '../../digilab/digilab.component';
import { ENTER } from '@angular/cdk/keycodes';
import { COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatAutocompleteSelectedEvent, MatDialog } from '@angular/material';
import { GuestDialogComponent } from './guest-dialog/guest-dialog.component';

@Component({
  selector: 'app-session-edit',
  templateUrl: './session-edit.component.html',
  styleUrls: ['./session-edit.component.css']
})
export class SessionEditComponent implements OnInit {

  topics;

  sessionForm : FormGroup; 

  visible: boolean = true;
  selected: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  separatorKeysCodes = [ENTER, COMMA];

  diglabs;
  options;
  guests;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

    this.initForm();

  }

  initForm() {

    this.diglabs = [{ id : 1 , name : 'Digilab 1' } , { id : 2 , name : 'Digilab 2' }]
    this.options = [{ id : 1 , name : 'testTopic3' },{ id : 2 , name : 'testTopic4' }];
    this.topics = [{ name : 'testTopic1' },{ name : 'testTopic2' }];
    this.guests = [{name: 'Test Guest' , email : 'Testemail@test.com' , contact:'1243241' , company:'testCompany'}];

    this.sessionForm = new FormGroup( {
      'Name' : new FormControl( null , [Validators.required] ) ,
      'DigilabId' : new FormControl( null , [Validators.required] ) ,
      'Duration' : new FormControl( null , [Validators.required] ) ,
      'StartDateTime' : new FormControl( null , [Validators.required] ) 
    });

  }

  onSubmit(){
    console.log(this.sessionForm.value);
  }

  onAddTopic(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;
    if ((value || '').trim()) {
      this.topics.push({ name: value.trim() });
    }
    if (input) {
      input.value = '';
    }
  }

  onRemoveTopic(topic: any): void {
    let index = this.topics.indexOf(topic);
    if (index >= 0) {
      if( topic.id )
        this.options.push(topic);
      this.topics.splice(index, 1);
    }
  }

  topicSelected( event: MatAutocompleteSelectedEvent ){
    // console.log(event);
    this.topics.push(event.option.value);
    console.log(this.options.indexOf(event.option.value));
    this.options.splice(0,1);
  }

  onAddGuest(){
    let dialogRef = this.dialog.open(GuestDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(guest => {
      this.guests.push(guest);
    });
  }

  onDeleteGuest(i){
    this.guests.splice(i,1);
  }

}
