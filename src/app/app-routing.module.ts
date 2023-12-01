import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redireccionarLogin = () => redirectUnauthorizedTo(['/login']);

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },  
  {
    path: '',
    redirectTo: 'menu-pri',
    pathMatch: 'full'
  },
  {
    path: 'menu-pri',
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe:redireccionarLogin}, 
    loadChildren: () => import('./pages/menu-pri/menu-pri.module').then( m => m.MenuPriPageModule)
  },
  {
    path: 'op-disponible',
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe:redireccionarLogin}, 
    loadChildren: () => import('./pages/op-disponible/op-disponible.module').then( m => m.OpDisponiblePageModule)
  },
  {
    path: 'op-solicitar',
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe:redireccionarLogin}, 
    loadChildren: () => import('./pages/op-solicitar/op-solicitar.module').then( m => m.OpSolicitarPageModule)
  },
  {
    path: 'login',
    
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: ':num2/recuperar',
    
    loadChildren: () => import('./pages/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: ':num/registro',
    
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  
  {
    path: 'pruebas-menu',
    
    loadChildren: () => import('./pages/pruebas-menu/pruebas-menu.module').then( m => m.PruebasMenuPageModule)
  },
  {
    path: 'informacion',
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe:redireccionarLogin}, 
    loadChildren: () => import('./modals/informacion/informacion.module').then( m => m.InformacionPageModule)
  },
  {
    path: 'perfil',
    canActivate: [AngularFireAuthGuard], data:{authGuardPipe:redireccionarLogin}, 
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'form-auto',
    loadChildren: () => import('./modals/form-auto/form-auto.module').then( m => m.FormAutoPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
