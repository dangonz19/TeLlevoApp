import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario:any;

  constructor(private storage:StorageService,
              private auth:AngularFireAuth,
              ) { }
  ngOnInit() {
    this.cargarInformacionUsuario();
  }

  async cargarInformacionUsuario(){
    //console.log("property", this.storage.userCorreo);
    var userEmail = await this.auth.currentUser;
    this.usuario = (await this.storage.obtenerUser()).filter(e => e.correo == userEmail?.email);
    //console.log("USUARIO FILTRADO", this.usuario);
  }

}