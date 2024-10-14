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

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'search-event',component:SearchEvevntComponent},
  {path:'like',component:LikeComponent},
  {path:'tickets',component:TicketsComponent},
  {path:'create-an-event',component:CreateAnEventComponent},
  {path:'signup',component:SignupComponent},
  {path: 'loginPage' ,component :LoginComponent},
  {path: 'eventPage' ,component :EventPageComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
