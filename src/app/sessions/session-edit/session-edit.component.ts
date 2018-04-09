import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DigilabComponent } from '../../digilab/digilab.component';
import { ENTER } from '@angular/cdk/keycodes';
import { COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';

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

  constructor() { }

  ngOnInit() {

    this.initForm();

  }

  initForm() {

    this.diglabs = [{ id : 1 , name : 'Digilab 1' } , { id : 2 , name : 'Digilab 2' }]
    this.options = [{ name : 'testTopic3' },{ name : 'testTopic4' }];
    this.topics = [{ name : 'testTopic1' },{ name : 'testTopic2' }];

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
      this.topics.splice(index, 1);
    }
  }

}
