import { Injectable } from '@angular/core';
import { ParentComponent } from '../component/parent/parent.component';
import { GrandparentComponent } from '../component/grandparent/grandparent.component';
import { SimpleComponent } from '../component/simple/simple.component';

@Injectable()
export class ComponentStore {
  parent: ParentComponent;
  simpleComponent: SimpleComponent;
  grandparent: GrandparentComponent;

}
