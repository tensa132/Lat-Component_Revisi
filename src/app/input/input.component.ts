import { Component, OnInit } from '@angular/core';
import { GlobSerService } from '../glob-ser.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

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

  submit() {
    this.newData = {
      nama: this.nama,
      keterangan: this.penjelasan
    }
    this.tempDataGlobal.push(this.newData);
    this.variabelglobal.setData(this.tempDataGlobal);
    this.dataGlobal.getData();
  }
}