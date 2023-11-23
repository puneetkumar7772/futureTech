import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DeveloperlistComponent } from './developerlist/developerlist.component';
import { ProfileviewComponent } from './profileview/profileview.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'list',component:DeveloperlistComponent},
  {path:'developer/profileview/:id',component:ProfileviewComponent},
  {path:'contact',component:ContactusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
