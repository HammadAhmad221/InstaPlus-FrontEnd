import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';
import { PostComponent } from './post/post.component';
import { OptimizationComponent } from './optimization/optimization.component';
import { GenerateComponent } from './generate/generate.component';
import { Generate1Component } from './generate1/generate1.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'nav',
    component:NavbarComponent
  },
  {
    path:'post',
    component:PostComponent
  },
  {
    path:'optimize',
    component:OptimizationComponent
  },
  {
    path:'generate',
    component:GenerateComponent
  },
  {
    path:'generate1',
    component:Generate1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
