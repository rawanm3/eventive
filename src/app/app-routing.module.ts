import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchEvevntComponent } from './component/search-evevnt/search-evevnt.component';
import { LikeComponent } from './component/like/like.component';
import { TicketsComponent } from './component/tickets/tickets.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { CreateAnEventComponent } from './component/create-an-event/create-an-event.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { EventPageComponent } from './component/event-page/event-page.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
// import { AuthGuard } from './auth/auth/auth.guard';
import { UsersComponent } from './component/users/users.component';
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
import { BookTicketComponent } from './component/book-ticket/book-ticket.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'search-event',component:SearchEvevntComponent},
  {path:'like',component:LikeComponent},
  {path:'tickets', component:TicketsComponent},
  {path:'create-an-event',component:CreateAnEventComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path: 'loginPage' ,component :LoginComponent},
  {path: 'dashboard' ,component :DashboardComponent},
  {path: 'eventPage' ,component :EventPageComponent },
  {path: 'page1' ,component :Page1Component},
  {path: 'page2' ,component :Page2Component},
  {path: 'page3' ,component :Page3Component},
  {path: 'page4' ,component :Page4Component},
  {path: 'page5' ,component :Page5Component},
  {path: 'page6' ,component :Page6Component},
  {path: 'page7' ,component :Page7Component},
  {path: 'page8' ,component :Page8Component},
  {path: 'page9' ,component :Page9Component},
  {path: 'page10' ,component :Page10Component},
  {path: 'bookTicket', component:BookTicketComponent},
  {path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
