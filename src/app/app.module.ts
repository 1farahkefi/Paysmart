// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component'; // Import HeaderComponent
import { AuthService } from './shared/auth-service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HelpsComponent } from './helps/helps.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    //HeaderComponent,
    /*AppComponent,*/
    LoginComponent,
    SignUpComponent,
    HelpsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  
})
export class AppModule {}
//platformBrowser().bootstrapModule(AppModule);
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));