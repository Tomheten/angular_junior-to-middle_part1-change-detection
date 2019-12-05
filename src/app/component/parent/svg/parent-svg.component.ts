import { ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-parent-svg',
  templateUrl: 'parent-svg.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ParentSvgComponent {
  constructor(private cd: ChangeDetectorRef) {
    cd.detach();
  }
}
