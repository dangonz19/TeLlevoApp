import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Animation, MenuController, ModalController } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { StorageService } from 'src/app/services/storage.service';
import { Device } from '@capacitor/device';
import { InformacionPage } from 'src/app/modals/informacion/informacion.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-pri',
  templateUrl: './menu-pri.page.html',
  styleUrls: ['./menu-pri.page.scss'],
})
export class MenuPriPage implements OnInit {
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;

  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  name: string = "";
  email: string = "";
  contrasena: string = "";
  radioBut: string = '';

  private animation!: Animation;

  constructor(private router: Router,
    private animationCtrl: AnimationController,
    private menuCtrl: MenuController,
    private helper: HelperService,
    private auth: AngularFireAuth,
    private storageService: StorageService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.viewUser();
    this.dispositivo();
  }

  perfil() {
    this.router.navigateByUrl('perfil');
  }

  cerrarMenu() {
    this.menuCtrl.close();
  }

  toggle() {
    this.menuCtrl.toggle();
  }
  validarMetodoDePago() {
    if (!this.radioBut) {
      this.helper.showAlert('Por favor, selecciona un método de pago.', 'Error');
      return false; 
    }
    return true;
  }
  

  confirmarSolicitud() {
    const origenInput = document.querySelector('#Origen') as HTMLIonInputElement;
    const destinoInput = document.querySelector('#Destino') as HTMLIonInputElement;
    const costoInput = document.querySelector('#Costo') as HTMLIonInputElement;
  
    const origen = origenInput.value;
    const destino = destinoInput.value;
    const costoValue = costoInput.value; 

    if (typeof costoValue !== 'string') {
      this.helper.showAlert('El campo Costo debe ser una cadena de texto válida.', 'Error');
      return;
    }

    const costo = parseFloat(costoValue);
  
    if (!origen || typeof origen !== 'string' || origen.length < 3 || origen.length > 40) {
      this.helper.showAlert('El campo Origen debe tener entre 3 y 40 caracteres.', 'Error');
      return;
    }
  
    if (!destino || typeof destino !== 'string' || destino.length < 3 || destino.length > 40) {
      this.helper.showAlert('El campo Destino debe tener entre 3 y 40 caracteres.', 'Error');
      return;
    }
  
    if (isNaN(costo) || costo < 1500 || costo > 10000) {
      this.helper.showAlert('El campo Costo debe ser un número entre 1500 y 10000.', 'Error');
      return;
    }

    if (!this.validarMetodoDePago()) {
      return; // Si la validación falla, no continúes con la confirmación
    }
  
    this.helper.showAlert('Solicitud confirmada', 'Éxito');
    this.radioBut = '';
    origenInput.value = '';
    destinoInput.value = '';
    costoInput.value = '';
  }
  
  
  

  async dispositivo() {
    const loader = await this.helper.showLoading("Cargando");
    const device = await Device.getInfo();
    //console.log("Información", device);
    await this.helper.showToast("Su dispositivo es: " + device.model);
    await loader.dismiss();
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(document.querySelectorAll("#Disponible",))
      .duration(1500)
      .iterations(Infinity)
      .direction('alternate')
      .fromTo('background', 'blue', 'var(--background)');
  }

  async viewUser() {
    //console.log("USUARIOS REGISTRADOS", await this.storageService.obtenerUser());
  }

  play() {
    this.animation.play();
  }

  stop() {
    this.animation.stop();
  }

  opDisponible() {
    this.router.navigateByUrl("/op-disponible");
  }
  opSolicitar() {
    this.router.navigateByUrl("/op-solicitar");
  }
  async logOut() {
    var confirmar = await this.helper.showConfirm("Desea cerrar la sesión actual?", "Confirmar", "Cancelar");

    if (confirmar == true) {
      const loader = await this.helper.showLoading("Cargando");
      await this.auth.signOut();
      this.menuCtrl.close();
      this.router.navigateByUrl("login");
      await loader.dismiss();
    }
  }
  modal() {
    var info = [];
    info.push(
      {
        modelo: "v16",
        patente: "wc-8054",
        anio: "2005",
        color: "naranja",
        marca: "Nissan"
      }
    );

    const parametros = { dataModal: info };
    this.helper.showModal(InformacionPage, parametros, true);
  }
}
