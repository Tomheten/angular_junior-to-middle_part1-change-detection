import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-grandparent-svg',
  templateUrl: 'grandparent-svg.component.html',
  encapsulation: ViewEncapsulation.None
})
export class GrandparentSvgComponent {
  constructor(private cd: ChangeDetectorRef) {
    cd.detach();
  }
}
