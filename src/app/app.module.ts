import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HashComponent } from './hash/hash.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { CustomEventBindingComponent } from './custom-event-binding/custom-event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HashComponent,
    DatabindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    CustomEventBindingComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
