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
  appendListJurusan(jurusanBaru, penjelasanBaru) {
    this.listJurusan.push(jurusanBaru, penjelasanBaru);
  }
  setNamaJurusan(idx, jurusanBaru) {
    this.listJurusan[idx][0] = jurusanBaru;
  }
  setPenjelasanJurusan(idx, penjelasanBaru) {
    this.listJurusan[idx][1] = penjelasanBaru;
  }
  getData() {
    return this.listJurusan;
  }
}