import { Component, OnInit } from '@angular/core';
import { GlobSerService } from '../glob-ser.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  nama : String; penjelasan : String;
  dataGlobal:any;
  tempDataGlobal:any;
  newData:any;
  constructor(public variabelglobal: GlobSerService) {
    this.dataGlobal = this.variabelglobal.getData();
    this.tempDataGlobal = this.dataGlobal;
  }

  ngOnInit() {
  }

  edit() {
    for(let i = 0; i < this.tempDataGlobal.length; i++) {
      if(this.tempDataGlobal[i].nama == this.nama) {
        this.tempDataGlobal[i].keterangan = this.penjelasan;
      }
    }
  }
}