import { ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CounterService } from '../../service/counter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  encapsulation: ViewEncapsulation.None,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  private subscriptions: Subscription[] = [];
  constructor(public counterService: CounterService,
              public cd: ChangeDetectorRef,
              private appRef: ApplicationRef) {
  }

  ngOnInit() {
  }

  getCounter() {
    console.log('child component, getCounter is called');
    return this.counterService.counter;
  }
}
