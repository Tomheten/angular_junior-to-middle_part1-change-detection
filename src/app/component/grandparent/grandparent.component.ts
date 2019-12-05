import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { CounterService } from '../../service/counter.service';
import { ComponentStore } from '../../service/component.store';

@Component({
  selector: 'app-grandparent',
  templateUrl: './grandparent.component.html',
  styleUrls: ['./grandparent.component.css'],
  encapsulation: ViewEncapsulation.None,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandparentComponent implements OnInit {
  emptyObject: any = {};

  constructor(public counterService: CounterService,
              public cd: ChangeDetectorRef,
              public hostRef: ElementRef<any>,
              public store: ComponentStore) {
    store.grandparent = this;
  }

  ngOnInit() {
  }

  getCounter() {
    console.log('grandparent component, getCounter is called');
    return this.counterService.counter;
  }
}
