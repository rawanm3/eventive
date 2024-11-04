import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { DestenationsComponent } from './component/destenations/destenations.component';
import { CapacityComponent } from './component/capacity/capacity.component';
import { LikeComponent } from './component/like/like.component';
import { TicketsComponent } from './component/tickets/tickets.component';
import { PopularCitiesComponent } from './component/popular-cities/popular-cities.component';
import { LocationComponent } from './component/location/location.component';
import { CreateAnEventComponent } from './component/create-an-event/create-an-event.component';
import { SearchEvevntComponent } from './component/search-evevnt/search-evevnt.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { HomeComponent } from './component/home/home.component';
import { EventsComponent } from './component/events/events.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { RegisterComponent } from './component/register/register.component';
import { PipesComponent } from './component/pipes/pipes.component';
import { EventPageComponent } from './component/event-page/event-page.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FirestoreModule } from '@angular/fire/firestore';
import { UsersComponent } from './component/users/users.component';
import {environment} from '../enviroments/enviroments';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { PaymentComponent } from './component/payment/payment.component';
import { Page1Component } from './component/events/page1/page1.component';
import { Page2Component } from './component/events/page2/page2.component';
import { Page3Component } from './component/events/page3/page3.component';
import { Page4Component } from './component/events/page4/page4.component';
import { Page5Component } from './component/events/page5/page5.component';
import { Page6Component } from './component/events/page6/page6.component';
import { Page7Component } from './component/events/page7/page7.component';
import { Page8Component } from './component/events/page8/page8.component';
import { Page9Component } from './component/events/page9/page9.component';
import { Page10Component } from './component/events/page10/page10.component';
// <<<<<<< HEAD
// import { HttpClientModule } from '@angular/common/http';
// =======
// import { BookTicketComponent } from './component/book-ticket/book-ticket.component';
// import { HttpClient, HttpClientModule } from '@angular/common/http';

// >>>>>>> 4ac8214fe5e2abb3d32c62deb1daa460da7a20d8


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    DestenationsComponent,
    CapacityComponent,
    EventsComponent,
    LikeComponent,
    TicketsComponent,
    PopularCitiesComponent,
    LocationComponent,
    SearchEvevntComponent,
    NotFoundComponent,
    HomeComponent,
    DashboardComponent,
    LoginPageComponent,
    RegisterComponent,
    PipesComponent,
    EventPageComponent,
    UsersComponent,
    CreateAnEventComponent, Page1Component, Page2Component, Page3Component, Page4Component, Page5Component, Page6Component,Page7Component ,Page8Component,Page9Component,Page10Component, 
    UsersComponent, 
   PaymentComponent,
  ],
  imports: [
   BrowserModule,
    FormsModule, 
    AppRoutingModule,
    ReactiveFormsModule,
     AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FirestoreModule,
// <<<<<<< HEAD
//     AngularFirestoreModule ,
//     HttpClientModule 
// =======
//     AngularFirestoreModule,
//     HttpClientModule  ,
// >>>>>>> 4ac8214fe5e2abb3d32c62deb1daa460da7a20d8

    ],
  providers: [

  ],
  //   FormsModule,
  //    AngularFireAuthModule,
  //   AppRoutingModule,
  // ],

  bootstrap: [AppComponent]
})
export class AppModule { }
