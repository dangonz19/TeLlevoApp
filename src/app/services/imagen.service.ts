// imagen.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImagenService {
  private imagenSeleccionadaURL: string = '';

  setImagenSeleccionadaURL(url: string) {
    this.imagenSeleccionadaURL = url;
  }

  getImagenSeleccionadaURL() {
    return this.imagenSeleccionadaURL;
  }
  
  
}

