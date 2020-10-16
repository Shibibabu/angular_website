import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';


import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  {path:'' ,redirectTo:'/Home',pathMatch:'full'},
  {path: 'Home', component:CarouselComponent },
  {path:'Service',component:ServicesComponent},
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  
{path:'',component:ContactUsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
