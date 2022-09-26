import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AccomodationComponent } from './accomodation/accomodation.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { ActivitiesComponent } from './lifestyle/activities/activities.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { WellnessAndSpaComponent } from './lifestyle/wellness-and-spa/wellness-and-spa.component';
import { OfferComponent } from './offer/offer.component';
import { WeddingComponent } from './wedding/wedding.component';
import { ThaiWeddingsComponent } from './wedding/thai-weddings/thai-weddings.component';
import { WesternWeddingsComponent } from './wedding/western-weddings/western-weddings.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';


@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    RoomsComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    CelebrationsComponent,
    FoodBeverageComponent,
    LifestyleComponent,
    ActivitiesComponent,
    ExcursionsComponent,
    ExperiencesComponent,
    WellnessAndSpaComponent,
    OfferComponent,
    WeddingComponent,
    ThaiWeddingsComponent,
    WesternWeddingsComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NavtabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 