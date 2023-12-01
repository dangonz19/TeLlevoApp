import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

const storageUsuario = "usuarioData";
const storageAuto = "autoData";


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public userCorreo = "";
  constructor() { }


  async getItem(llave:string):Promise<string | null>{
    const obj = await Preferences.get({key:llave});
    return obj.value;
  }


  async setItem(llave:string, valor:string){
    await Preferences.set({key:llave,value:valor});
  }


  async obtenerUser(){
    const storageData = await this.getItem(storageUsuario);
    
    if (storageData == null) {
      return [];
    }

    const data:any[] = JSON.parse(storageData);
    if (data) {
      return data;
    }else{
      return [];
    }
  }

  async agregarUser(user:any[]){
    const usuarios = await this.obtenerUser();
    for (const i of usuarios) {
      if (i) {
        user.push(i);
      }
    }

    this.setItem(storageUsuario,JSON.stringify(user));
  }
            /*---------- guardar auto ------------------*/
  async obtenerAuto() {
    const storageData = await this.getItem(storageAuto);

    if (storageData == null) {
      return null;
    }

    const auto = JSON.parse(storageData);
    if (auto) {
      return auto;
    } else {
      return null;
    }
  }


  

  async guardarAuto(auto: any) {
    // Obtén los autos existentes del almacenamiento
    const autos = await this.obtenerAuto();

    // Si no hay autos existentes, crea un nuevo arreglo
    if (!autos) {
      await this.setItem(storageAuto, JSON.stringify([auto]));
    } else {
      // Agrega el nuevo auto al arreglo existente
      autos.push(auto);
      await this.setItem(storageAuto, JSON.stringify(autos));
    }
  }

}
