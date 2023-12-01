import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-op-solicitar',
  templateUrl: './op-solicitar.page.html',
  styleUrls: ['./op-solicitar.page.scss'],
})
export class OpSolicitarPage implements OnInit {
  
  radioBut:string= "";

  constructor(private router:Router, 
    private menuCtrl: MenuController, 
    private helperService:HelperService) { }

  ngOnInit() {
  }
  cerrarMenu(){
    this.menuCtrl.close();
  }

  metodopago(){
    this.router.navigateByUrl("login")
  }

  openFirstMenu() {
    // Open the menu by menu-id
    this.menuCtrl.enable(true, 'first-menu');
    this.menuCtrl.open('first-menu');
  }
  presentAlert() {
    
    this.helperService.showAlert("datos agregados","Exito!")
    this.router.navigateByUrl("menu-pri")
    }

    
  }



