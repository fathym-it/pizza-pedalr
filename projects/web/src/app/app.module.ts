import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule, MatMenuModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationsService } from './svc/locations';
import { MenusService } from './svc/menus';

@NgModule({
  declarations: [AppComponent, ...RoutingComponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule
  ],
  providers: [LocationsService, MenusService],
  bootstrap: [AppComponent]
})
export class AppModule {}
