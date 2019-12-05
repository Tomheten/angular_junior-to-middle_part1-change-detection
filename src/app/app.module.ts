import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import { CounterComponent } from './component/counter/counter.component';
import { CounterService } from './service/counter.service';
import { SimpleComponent } from './component/simple/simple.component';
import { GrandparentComponent } from './component/grandparent/grandparent.component';
import { GrandparentSvgComponent } from './component/grandparent/svg/grandparent-svg.component';
import { ComponentStore } from './service/component.store';
import { ParentSvgComponent } from './component/parent/svg/parent-svg.component';
import { ChildSvgComponent } from './component/child/svg/child-svg.component';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    CounterComponent,
    SimpleComponent,
    GrandparentComponent,
    GrandparentSvgComponent,
    ParentSvgComponent,
    ChildSvgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CounterService, ComponentStore],
  bootstrap: [AppComponent],
  entryComponents: [SimpleComponent]
})
export class AppModule { }
