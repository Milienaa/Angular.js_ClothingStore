import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { CustomQuantityPipePipe } from './custom-quantity-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GalleryItemComponent,
    CustomQuantityPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
