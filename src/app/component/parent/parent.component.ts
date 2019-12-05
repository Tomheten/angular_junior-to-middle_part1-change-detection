import {
  AfterContentChecked,
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  NgZone,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import { CounterService } from '../../service/counter.service';
import { ComponentStore } from '../../service/component.store';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation: ViewEncapsulation.None,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit, OnInit, DoCheck, AfterViewChecked, AfterContentChecked, OnChanges {
  @Input() trigger: any;

  constructor(public counterService: CounterService,
              public cd: ChangeDetectorRef,
              private store: ComponentStore,
              private zone: NgZone) {
    this.store.parent = this as ParentComponent;

    // setInterval(() => undefined, 2000);
  }

  ngOnInit() {
    // this.cd.detach();
    this.counterService.counter$.subscribe(() => this.cd.detectChanges());
  }

  ngAfterContentChecked(): void {
    // console.log('afterContentChecked into parent component');
  }

  ngAfterViewChecked(): void {
    // console.log('afterViewChecked into parent component');
  }

  ngDoCheck(): void {
    // this.cd.markForCheck();
    // console.log('do check into parent component');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('into parent onChanges', changes);
  }

  getCounter() {
    console.log('parent component, getCounter is called');
    return this.counterService.counter;
  }

  emptyClick() {
    // this.cd.detectChanges();
    console.log('click');
  }
}
