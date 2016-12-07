import { ProductListComponent } from './product-list/product-list.component';
import { MenuComponent } from './menu/menu.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ 
    BrowserModule
   ],
  declarations: [ 
    AppComponent,
    MenuComponent,
    ProductListComponent
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
