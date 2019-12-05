import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child-svg',
  templateUrl: 'child-svg.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ChildSvgComponent {
  constructor(private cd: ChangeDetectorRef) {
    cd.detach();
  }
}
