import { Route } from '@angular/router';

import { CouncilorsComponent } from './councilors.component';

export const CouncilorsRouting: Route[] = [
  {
    path: '',
    title: "Concejales",
    component: CouncilorsComponent
  }
];
