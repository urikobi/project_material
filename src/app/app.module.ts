import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from './shared/services/country.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterFormComponent,
    LoginFormComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule
        
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
