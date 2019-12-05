import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CounterService } from '../../service/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CounterComponent implements OnInit {
  constructor(public counterService: CounterService) {
  }

  ngOnInit() {
  }
}
