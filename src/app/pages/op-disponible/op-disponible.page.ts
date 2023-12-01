import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { InformacionPage } from 'src/app/modals/informacion/informacion.page';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-op-disponible',
  templateUrl: './op-disponible.page.html',
  styleUrls: ['./op-disponible.page.scss'],
})
export class OpDisponiblePage implements OnInit {

  constructor(private alertController: AlertController,
    private helper:HelperService) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Datos agregados!',
      message: 'Sus datos se guardaron correctamente',
      buttons: ['OK'],
    });

    await alert.present();
  }

}

