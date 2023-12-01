import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { FormControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
  providers : [HelperService]
})
export class RecuperarPage implements OnInit {
  userEmail = new FormControl('');
  constructor(private route:Router, private helperService:HelperService, private activatedRoute:ActivatedRoute) { }

  parametronumeroDos:number | undefined;

  /*email:string = "";*/

  ngOnInit() {
    this.parametronumeroDos = this.activatedRoute.snapshot.params['num2'];
    //console.log("parametro: ", this.parametronumeroDos);
  }

  login(){
    this.route.navigateByUrl("login")
  }
  async enviCorr() {
    if (this.userEmail.invalid) {
      this.helperService.showAlert('Por favor, ingresa un correo.', 'Error');
      return;
    }
    const email = this.userEmail.value;
    if (email !== null && typeof email === 'string') {
      try {
        await this.helperService.resetPassword(email);
        this.helperService.showAlert('Email enviado, visita tu correo!', 'Información');
        this.route.navigateByUrl('login');
      } catch (error) {
        this.helperService.showAlert('No se pudo enviar el correo. Verifica la dirección de correo electrónico.', 'Error');
      }
    } else {
      this.helperService.showAlert('La dirección de correo electrónico no es válida.', 'Error');
    }
  }  
  }