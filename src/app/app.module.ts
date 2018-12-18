import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { MatFormFieldModule,
         MatGridListModule, 
         MatCardModule, 
         MatMenuModule, 
         MatToolbarModule, 
         MatIconModule, 
         MatButtonModule, 
                 
         MatSidenavModule,
         MatListModule,
         MatTableModule, 
         MatInputModule
        } from '@angular/material';

import { JwtModule } from '@auth0/angular-jwt';        

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { B2fSearcherComponent } from './b2f-searcher/b2f-searcher.component';        
import { B2fBookComponent } from './b2f-book/b2f-book.component';

@NgModule({
  declarations: [
    AppComponent,
    B2fSearcherComponent,
    B2fBookComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,    
    FormsModule, 
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
             return     localStorage.getItem('access_token');},
       //En esta matriz, puede agregar cualquier dominio que tenga permitido recibir las API públicas como JWT.      
        whitelistedDomains: ['localhost:4200', 'https://demo.booktofly.co'],
        //En esta matriz, puede agregar rutas que no tienen permitido recibir el token JWT.
        //blacklistedRoutes: ['http://localhost:42000/']
      }
    }),
    LayoutModule,    
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,    
    MatIconModule, 
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatTableModule, 
    MatToolbarModule,   
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
