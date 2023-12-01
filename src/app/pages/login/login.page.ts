import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string = "";
  contrasena:string = "";

  constructor(private router:Router, 
    private helperService:HelperService,
    private auth:AngularFireAuth,
    private storage:StorageService,) { }

  ngOnInit() {
  }

  

  async login(){
    const loader = await this.helperService.showLoading("cargando");
    try {
    this.storage.userCorreo = this.email;
    
    const request = await this.auth.signInWithEmailAndPassword(this.email,this.contrasena);
    //console.log("TOKEN", await request.user?.getIdToken());
    //this.helperService.showAlert("inicio de sesion correcto","Exito!");
    await this.router.navigateByUrl("menu-pri");
    await loader.dismiss();
    } catch (error:any) {
      if(error.code == 'auth/invalid-email'){
        await loader.dismiss();
        await this.helperService.showAlert("error en el formato de correo","ERROR")
      } 
      if(error.code == 'auth/user-not-found'){
        await loader.dismiss();
        await this.helperService.showAlert("usuario no encontrado","ERROR")
      }
      if(error.code == 'auth/wrong-password'){
        await loader.dismiss();
        await this.helperService.showAlert("contraseña invalida","ERROR")
      }

      if(error.code == 'auth/weak-password'){
        await loader.dismiss();
        await this.helperService.showAlert("el largo de la contraseña es incorrecto","ERROR")
      }
    }
  }

  recuperar(){
    var parametroN2 = 654321;
    this.router.navigateByUrl(parametroN2 + "/recuperar")
  }
  registro(){
    var parametroN1 = 123456;
      this.router.navigateByUrl( parametroN1 +"/registro");
  }
  


}