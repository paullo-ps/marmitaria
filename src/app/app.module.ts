import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PackagesComponent } from './packages/packages.component';
import { PackagesListComponent } from './packages/packages-list/packages-list.component';
import { PackagesDetailsComponent } from './packages/packages-details/packages-details.component';
import { PackageItemComponent } from './packages/packages-list/package-item/package-item.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodEditComponent } from './food-list/food-edit/food-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PackagesComponent,
    PackagesListComponent,
    PackagesDetailsComponent,
    PackageItemComponent,
    FoodListComponent,
    FoodEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
