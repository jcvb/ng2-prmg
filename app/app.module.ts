import { StarComponent } from './shared/star.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductListComponent } from './product-list/product-list.component';
import { MenuComponent } from './menu/menu.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule
   ],
  declarations: [ 
    AppComponent,
    MenuComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
