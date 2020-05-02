import { Injectable } from '@angular/core';

@Injectable()
export class GlobSerService {

  constructor() { }

  private listJurusan = [{
    nama: 'Informatika',
    keterangan: 'Kacamata'
  }, {
    nama: 'Akuntansi Pajak',
    keterangan: 'Pembukuan'
  }, {
    nama: 'DKV',
    keterangan: 'Gambar terus'
  }];
  
  public appendListJurusan(jurusanBaru, penjelasanBaru) {
    this.listJurusan.push(jurusanBaru, penjelasanBaru);
  }
  public setNamaJurusan(idx, jurusanBaru) {
    this.listJurusan[idx][0] = jurusanBaru;
  }
  public setPenjelasanJurusan(idx, penjelasanBaru) {
    this.listJurusan[idx][1] = penjelasanBaru;
  }
  public getData() {
    return this.listJurusan;
  }
}