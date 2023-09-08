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
import { MyArticalComponent } from './my-artical/my-artical.component';
import { BillingComponent } from './billing/billing.component';
import { OptimizeResultComponent } from './optimize-result/optimize-result.component';
import { GenerateResultComponent } from './generate-result/generate-result.component';
import { TabelsComponent } from './tabels/tabels.component';
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
    path:'optimize-loading',
    component:OptimizationComponent
  },
  {
    path:'generate-loading',
    component:GenerateComponent
  },
  {
    path:'generate',
    component:Generate1Component
  },
  {
    path:'artical',
    component:MyArticalComponent
  },
  {
    path:'billing',
    component:BillingComponent
  },
  {
    path:'optimize-result',
    component:OptimizeResultComponent
  },
  {
    path:'generate-result',
    component:GenerateResultComponent
  },
  {
path:'tables',
component:TabelsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
