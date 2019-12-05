import {
  AfterViewInit,
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  Injector,
  NgModuleRef,
  NgZone,
  OnInit,
  ViewChild
} from '@angular/core';
import { CounterService } from './service/counter.service';
import { ComponentStore } from './service/component.store';
import { SimpleComponent } from './component/simple/simple.component';
import { GrandparentComponent } from './component/grandparent/grandparent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild(GrandparentComponent, {static: true})
  private grandComponent: GrandparentComponent;
  @ViewChild('myInput', {static: true}) myInput: HTMLInputElement;

  constructor(public counterService: CounterService,
              public cd: ChangeDetectorRef,
              private appRef: ApplicationRef,
              private zone: NgZone,
              private cfResolver: ComponentFactoryResolver,
              private injector: Injector,
              private ngModule: NgModuleRef<any>,
              private hostRef: ElementRef<any>,
              public store: ComponentStore) {
  }

  ngOnInit(): void {

    const simpleComponentComponentRef = this.cfResolver.resolveComponentFactory(SimpleComponent).create(this.injector);
    // this.zone.runOutsideAngular(
    //   () => document.body.addEventListener('mousemove', () => console.log('mousemove')))
    // this.appRef.tick();
  }

  ngAfterViewInit(): void {
  }

  tick() {
    this.appRef.tick();
  }

  changeParentTriggerRef() {
    this.counterService.emptyObject = {};
  }
}
