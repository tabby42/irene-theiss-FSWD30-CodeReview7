import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent }    from './home-page/home-page.component';
import { AboutPageComponent }   from './about-page/about-page.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

const appRoutes: Routes = [
	 {
	   path: '', component: HomePageComponent
	 },
	 {
	   path: 'men', component: AboutPageComponent
	 },
	 { 
	 	path: 'detail/:id', component: MemberDetailComponent 
	 }
];

@NgModule({
	imports: [ RouterModule.forRoot(appRoutes) ],
	// Exporting RouterModule makes router directives 
	//available for use in the AppModule components that will need them
  	exports: [ RouterModule ]
})
export class AppRoutingModule {


}