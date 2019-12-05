import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';
import { CounterService } from '../../service/counter.service';
import { ComponentStore } from '../../service/component.store';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css'],
})
export class SimpleComponent implements OnInit, DoCheck {
  constructor(public counterService: CounterService, public store: ComponentStore) {
    store.simpleComponent = this;
  }

  ngOnInit() {
  }

  getCounter() {
    console.log('simple component, getCounter is called' );
    return this.counterService.counter;
  }

  ngDoCheck(): void {
    // console.log('docheck into simple component');
  }
}
