import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';
import { InformacionPage } from '../informacion/informacion.page';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-form-auto',
  templateUrl: './form-auto.page.html',
  styleUrls: ['./form-auto.page.scss'],
})
export class FormAutoPage implements OnInit {
  auto: any[] = [];
  imagenSeleccionadaURL: string = '';

  constructor(
    private storageService: StorageService,
    private helperService: HelperService,
    private imagenService: ImagenService,
  ) {}

  ngOnInit() {}

  /*seleccionarImagen(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const imagen = input.files[0];
      const imagenURL = URL.createObjectURL(imagen);
      this.imagenService.setImagenSeleccionadaURL(imagenURL);
    }
  }*/
  imagenSeleccionada: boolean = false;

  seleccionarImagen(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const imagen = input.files[0];
      const imagenURL = URL.createObjectURL(imagen);
      this.imagenSeleccionadaURL = imagenURL;
      this.imagenSeleccionada = true;
    }
  }


 

  guardarAuto() {
    const patenteInput = document.getElementById('Patente') as HTMLIonInputElement;
    const patoInput = document.getElementById('pato') as HTMLIonInputElement;
    const modeloInput = document.getElementById('Modelo') as HTMLIonInputElement;
    const marcaInput = document.getElementById('Marca') as HTMLIonInputElement;
    const colorInput = document.getElementById('Color') as HTMLIonInputElement;
    
  
    const patente = patenteInput.value;
    const pato = patoInput.value;
    const modelo = modeloInput.value;
    const marca = marcaInput.value;
    const color = colorInput.value;
    
   
  
  
    if (!patente || !pato || !modelo || !marca || !color) {
      this.helperService.showAlert('Por favor, complete todos los campos.', 'Error');
      return;
    }
  
    if (typeof patente !== 'string' || patente.length !== 6) {
      this.helperService.showAlert('La patente debe tener exactamente 6 caracteres.', 'Error');
      return;
    }
  
    if (typeof pato !== 'string' || pato.length !== 4 || isNaN(Number(pato))) {
      this.helperService.showAlert('El año del automóvil debe contener exactamente 4 dígitos numéricos.', 'Error');
      return;
    }
  
    if (typeof modelo !== 'string' || modelo.length < 3 || modelo.length > 40) {
      this.helperService.showAlert('El modelo debe tener entre 3 y 40 caracteres.', 'Error');
      return;
    }
  
    if (typeof marca !== 'string' || marca.length < 3 || marca.length > 40) {
      this.helperService.showAlert('La marca debe tener entre 3 y 40 caracteres.', 'Error');
      return;
    }
  
    if (typeof color !== 'string' || color.length < 3 || color.length > 40) {
      this.helperService.showAlert('El color debe tener entre 3 y 40 caracteres.', 'Error');
      return;
    }
    if (!this.imagenSeleccionada) {
      this.helperService.showAlert('Por favor, suba una imagen del automóvil.', 'Error');
      return;
    }
    
    
    
  
    const auto = {
      patente: patente,
      modelo: modelo,
      marca: marca,
      pato: pato,
      color: color,
      imagenURL: this.imagenSeleccionadaURL,
      
    };
  
   


    // Guardar el automóvil en el almacenamiento
    localStorage.setItem('auto', JSON.stringify(auto));
    
    this.storageService.guardarAuto(auto);
    this.helperService.showAlert('Datos agregados con éxito.', 'Éxito');
  
    // Limpiar los campos de entrada
    patenteInput.value = '';
    patoInput.value = '';
    modeloInput.value = '';
    marcaInput.value = '';
    colorInput.value = '';
    this.imagenSeleccionadaURL = '';
  }
  
}