import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FactureComponent } from './facture/facture.component';
import { PaiementComponent} from './paiement/paiement.component';
import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings/settings.component';
import { HelpsComponent } from './helps/helps.component';



export const routes: Routes = [
  { path: '', redirectTo: '/paysmart', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent},
  {path: 'paysmart', component: HeaderComponent},
  { path: 'facture', component: FactureComponent },
  { path: 'paiement', component: PaiementComponent },
  { path: 'help', component: HelpsComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
