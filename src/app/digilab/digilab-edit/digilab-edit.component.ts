import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';

@Component({
  selector: 'app-digilab-edit',
  templateUrl: './digilab-edit.component.html',
  styleUrls: ['./digilab-edit.component.css']
})
export class DigilabEditComponent implements OnInit {

  topics;

  visible: boolean = true;
  selected: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  separatorKeysCodes = [ENTER, COMMA];

  digilabForm : FormGroup; 
  
  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    
    this.topics = [{ name : 'testTopic1' },{ name : 'testTopic2' }];

    let hosts = new FormArray([ 
      new FormGroup({'email' : new FormControl( 'Test Host 1' ) }) ,
      new FormGroup({'email' : new FormControl( 'Test Host 2' ) }) ,
    ]);
    
    this.digilabForm = new FormGroup({
      'name' : new FormControl( 'testDigilab' ) ,
      'topics' : new FormControl(this.topics) ,
      'latitude' : new FormControl(21) , 
      'longitude' : new FormControl(12) ,
      'email' : new FormControl( 'test@test.com' ) ,
      'hosts' : hosts ,
      'receptionist' : new FormControl( 'testReceptionist@test.com' ) ,
      'fromTime' : new FormControl( '9:00' ) ,
      'toTime' : new FormControl( '18:00' ) ,
      'feedbackDelays' : new FormControl( 1 ) ,
      'preBookExpiry' : new FormControl( 1 ) ,
      'feedbackQuestion1' : new FormControl( 'abc' ) ,
      'feedbackQuestion2' : new FormControl( 'abc' ) ,
      'recptMailDelivery' : new FormControl( 1 ) ,
      'isEmailEnabled' : new FormControl( false ) ,
      'isPushEnabled' : new FormControl( false ) ,
      'isActive' : new FormControl( false ) ,
    })

  }

  onSubmit(){
    console.log(this.digilabForm.value);
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
      this.topics.splice(index, 1);
    }
  }

  onAddHost(){
    (<FormArray>this.digilabForm.get('hosts')).push( new FormGroup({
      'email' : new FormControl( )
    }) );
  }

  onRemoveHost( index : number ){
    (<FormArray>this.digilabForm.get('hosts')).removeAt(index);
  } 

}
