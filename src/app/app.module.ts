import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserModule } from '@angular/platform-browser'

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
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

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
    CreateAnEventComponent,
    SearchEvevntComponent,
    NotFoundComponent,
    HomeComponent,
    DashboardComponent,
    LoginPageComponent,
    RegisterComponent,
    PipesComponent,
    EventPageComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
     AngularFireAuthModule,
    AppRoutingModule,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
