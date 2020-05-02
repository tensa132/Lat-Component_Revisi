import { Component, OnInit } from '@angular/core';
import { GlobSerService } from '../glob-ser.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  dataGlobal:any;
  constructor(public variabelglobal: GlobSerService){
    this.dataGlobal = this.variabelglobal.getData();
  }

  ngOnInit() {

  }

}