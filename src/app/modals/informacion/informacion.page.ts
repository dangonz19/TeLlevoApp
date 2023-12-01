import { Component, Input, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Informacion } from 'src/app/models/informacion';
import { ImagenService } from 'src/app/services/imagen.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  //@Input() dataModal:Informacion[]=[];

  dataModal: any[] = [];
  imagenSeleccionadaURL: string | undefined;

  constructor(private modalController:ModalController,
              private router:Router,
              private storage:StorageService,
              private imagenService: ImagenService) { }

  ngOnInit() {
    this.cargarInformacion();
  }

  async cargarInformacion(){
    this.dataModal = await this.storage.obtenerAuto();
    //this.imagenSeleccionadaURL = this.imagenService.getImagenSeleccionadaURL();
  }

  get imagenesSeleccionadas() {
    return this.imagenService.getImagenSeleccionadaURL();
  }

  

  /*eliminarAuto(){
    localStorage.clear();
  
    this.dataModal.shift();
  }*/

  close(){
    this.modalController.dismiss();
  }
  formAuto(){
  this.router.navigateByUrl('form-auto'); 
  }
}
