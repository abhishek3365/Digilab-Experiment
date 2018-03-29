import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-digilab-item',
  templateUrl: './digilab-item.component.html',
  styleUrls: ['./digilab-item.component.css']
})
export class DigilabItemComponent implements OnInit {

  @Input()
  status : string;

  constructor() { }

  ngOnInit() {
  }

}
