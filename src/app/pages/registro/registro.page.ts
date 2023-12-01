import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { Comuna } from 'src/app/models/comuna';
import { Region } from 'src/app/models/region';
import { HelperService } from 'src/app/services/helper.service';
import { LocationService } from 'src/app/services/location.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  parametronumeroUno:number | undefined;

  name:string = "";
  email:string = "";
  contrasena:string = "";

  
  regiones:Region[]=[];
  comunas:Comuna[]=[];
  regionSeleccionado:number = 0;
  comunaSeleccionado:number = 0;

  constructor(private auth:AngularFireAuth,
              private router:Router, 
              private helperService:HelperService, 
              private activatedRoute:ActivatedRoute,
              private locationService:LocationService,
              private storageService:StorageService
              ) { }

  ngOnInit() {
    //this.viewUser();
    this.parametronumeroUno = this.activatedRoute.snapshot.params['num'];
    //console.log("parametro: ", this.parametronumeroUno);
    this.cargarRegion();
  }


  async cargarRegion() {
    const req = await this.locationService.getRegion();
    this.regiones = req.data;
    //console.log("REGION", this.regiones);
  
    // Asignar la región seleccionada
    if (this.regiones.length > 0) {
      this.locationService.selectedRegion = this.regiones[0];
    }
  }
  
  async cargarComuna() {
    const req = await this.locationService.getComuna(this.regionSeleccionado);
    this.comunas = req.data;
  
    // Asignar la comuna seleccionada
    if (this.comunas.length > 0) {
      this.locationService.selectedComuna = this.comunas[0];
    }
  }

  login(){
    this.router.navigateByUrl("login")
  }
  async viewUser(){
    //console.log("USUARIOS REGISTRADOS",await this.storageService.obtenerUser());
  }
  validarRegion() {
    if (this.regionSeleccionado === 0) {
      this.helperService.showAlert('Por favor, selecciona una región.', 'Error');
      return false;
    }
    return true;
  }
  validarComuna() {
    if (this.comunaSeleccionado === 0) {
      this.helperService.showAlert('Por favor, selecciona una comuna.', 'Error');
      return false;
    }
    return true;
  }
  
  async registro() {
    const loader = await this.helperService.showLoading("Cargando");
    try {
      // Obtener el nombre de usuario desde el formulario
      const nombreUsuario = this.name;
      // Crear un objeto de usuario que incluye correo, contraseña, nombre, región y comuna
      const user = {
        correo: this.email,
        contrasena: this.contrasena,
        nombre: nombreUsuario,
        region: this.locationService.selectedRegion, // Obtener la región seleccionada desde LocationService
        comuna: this.locationService.selectedComuna, // Obtener la comuna seleccionada desde LocationService
      };
  
      // Registrar al usuario en Firebase Authentication
      const request = await this.auth.createUserWithEmailAndPassword(this.email, this.contrasena);

      // Validar la selección de región y comuna
      if (!this.validarRegion() || !this.validarComuna()) {
        // No continúes con el registro si alguna validación falla
        await loader.dismiss();
        return;
      }
      if (request.user) {
        // Agregar el usuario al almacenamiento local
        this.storageService.agregarUser([user]);
        this.helperService.showAlert("Usuario registrado correctamente", "INFORMACIÓN");
        await this.router.navigateByUrl("login");
        await loader.dismiss();
      }
    } catch (error: any) {
      if (error.code == 'auth/invalid-email') {
        await loader.dismiss();
        await this.helperService.showAlert("error en el formato del correo", "ERROR");
      }
      if (error.code == 'auth/weak-password') {
        await loader.dismiss();
        await this.helperService.showAlert("el largo de la contraseña es incorrecto", "ERROR");
      }
      if (error.code == 'auth/email-already-in-use') {
        await loader.dismiss();
        await this.helperService.showAlert("el email ya existe", "ERROR");
      }
      // Manejar errores aquí, si es necesario
    }
  }
}
