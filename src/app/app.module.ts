import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppFormComponent } from './appForm/appform.component';

import { HttpClientModule } from '@angular/common/http';

import { HttpService} from './appForm/appform.service';
import { BlahComponent } from './blah/blah.component';
import { CoreComponent } from './core/core.component';
import { SkynetComponent } from './core/skynet/skynet.component';

@NgModule({
  declarations: [
    AppComponent,
    AppFormComponent,
    BlahComponent,
    CoreComponent,
    SkynetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
