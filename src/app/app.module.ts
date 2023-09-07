import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    NavbarComponent,
    SigninComponent,
    PostComponent,
    OptimizationComponent,
    GenerateComponent,
    Generate1Component,
    MyArticalComponent,
    BillingComponent,
    OptimizeResultComponent,
    GenerateResultComponent,
    TabelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
