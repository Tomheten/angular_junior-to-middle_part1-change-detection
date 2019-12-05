import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CounterService {
  counter$: Subject<number> = new Subject<number>();
  get counter(): number {
    return this._counter;
  }

  set counter(value: number) {
    this._counter = value;
    console.log('counter$');
    this.counter$.next(value);
  }
  private _counter: number = 0;
  public emptyObject = {};
  private countPositiveColor: string = '#28a745';
  private countNegativeColor: string = '#dc3545';

  constructor() {
  }

  public static changeCountColor(color: string): void {
    document.documentElement.style.setProperty('--count-color', color);
  }

  increaseCounter(): void {
    if (this._counter === 0) {
      CounterService.changeCountColor(this.countPositiveColor);
    }
    this.counter += 1;
  }

  decreaseCounter(): void {
    if (this._counter === 0) {
      CounterService.changeCountColor(this.countNegativeColor);
    }
    this.counter -= 1;
  }
}
