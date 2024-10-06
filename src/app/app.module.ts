import { NgModule } from '@angular/core';
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
import { EventsComponent } from './component/events/events.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

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
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
