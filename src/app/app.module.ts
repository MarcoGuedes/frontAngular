import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TrialboardComponent } from './modules/trial/trialboard/trialboard.component';
import { AdminboardComponent } from './modules/admin/adminboard/adminboard.component';
import { HeaderComponent } from './modules/admin/header/header.component';
import { FooterComponent } from './modules/admin/footer/footer.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TrialboardComponent,
    AdminboardComponent,
    HeaderComponent,
    FooterComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
