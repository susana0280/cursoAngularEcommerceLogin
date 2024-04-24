import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { ProductoItemComponent } from './components/producto-item/producto-item.component';
import { ProductoComponent } from './components/producto/producto.component'
import { HttpClientModule } from '@angular/common/http';
import { PageCardComponent } from './components/page-card/page-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/auth/signup/signup.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {AngularFireModule} from "@angular/fire/compat"
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductoListComponent,
    ProductoItemComponent,
    HomeComponent,
    ProductoComponent,
    PageCardComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
     FormsModule, 
    //  provideFirebaseApp(() => initializeApp({"projectId":"ecommerseangularcurso","appId":"1:477671112312:web:e682674fa92cd51f45b78d","storageBucket":"ecommerseangularcurso.appspot.com","apiKey":"AIzaSyBrSNG-XKndPGP_-2bHJhnCiJZG3ai2xQw","authDomain":"ecommerseangularcurso.firebaseapp.com","messagingSenderId":"477671112312"})),
    ReactiveFormsModule,
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    // provideFirebaseApp(() => initializeApp({"projectId":"ecommerseangularcurso","appId":"1:477671112312:web:e682674fa92cd51f45b78d","storageBucket":"ecommerseangularcurso.appspot.com","apiKey":"AIzaSyBrSNG-XKndPGP_-2bHJhnCiJZG3ai2xQw","authDomain":"ecommerseangularcurso.firebaseapp.com","messagingSenderId":"477671112312","measurementId":"G-ECFSDB5NJ3"})),
    provideFirebaseApp(() => initializeApp({"projectId":"cursoangularecommerce","appId":"1:242162427552:web:21533d9f1b97c8d13b8bc5","storageBucket":"cursoangularecommerce.appspot.com","apiKey":"AIzaSyAtmcJs1mxC4KzaURN2v6e9CbLo4fqa3-A","authDomain":"cursoangularecommerce.firebaseapp.com","messagingSenderId":"242162427552","measurementId":"G-RJDVEB1CRD"})),
  
  
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }