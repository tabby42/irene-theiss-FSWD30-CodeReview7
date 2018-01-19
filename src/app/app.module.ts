import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core';
//Bootstrap Modules
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule, Routes } from '@angular/router';
//Component Modules
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
//AngularFire Modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

const appRoutes: Routes = [
	 {
	   path: '', component: HomePageComponent
	 },
	 {
	   path: 'about', component: AboutPageComponent
	 },
];

export const firebaseConfig = {
    apiKey: "AIzaSyBFbRgrDC6MdzoJ69u_zR2sUAva1wbjwkw",
    authDomain: "codereview7-526f5.firebaseapp.com",
    databaseURL: "https://codereview7-526f5.firebaseio.com",
    projectId: "codereview7-526f5",
    storageBucket: "codereview7-526f5.appspot.com",
    messagingSenderId: "223921213269"
}

//root module AppModule -> needed to launch application
@NgModule({
  //list of all components inside this module
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    HomePageComponent,
    AboutPageComponent
  ],
  //specify dependencies
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
	  RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule, 
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
