import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobSerService } from '../glob-ser.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private route : ActivatedRoute, private routePass : Router, public varglob : GlobSerService) { }

  nama : String; penjelasan : String;
  ngOnInit() {
  }

  submit() {
    this.varglob.appendJurusan(this.nama);
    this.varglob.appendPenjelasan(this.penjelasan);
  }
}