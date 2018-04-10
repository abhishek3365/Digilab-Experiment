import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.css']
})
export class SessionDetailComponent implements OnInit {

  topics = [{ name : 'testTopic1' },{ name : 'testTopic2' },{ name : 'testTopic2' },{ name : 'testTopic2' },{ name : 'testTopic2' },{ name : 'testTopic2' },{ name : 'testTopic2' }];
  guests = [{name: 'Test Guest' , email : 'Testemail@test.com' , contact:'1243241' , company:'testCompany'},
  {name: 'Test Guest' , email : 'Testemail@test.com' , contact:'1243241' , company:'testCompany'},
  {name: 'Test Guest' , email : 'Testemail@test.com' , contact:'1243241' , company:'testCompany'},
  {name: 'Test Guest' , email : 'Testemail@test.com' , contact:'1243241' , company:'testCompany'}];

  constructor() { }

  ngOnInit() {
  }

}
