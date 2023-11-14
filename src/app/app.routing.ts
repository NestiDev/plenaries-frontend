import { Route } from '@angular/router';

export const AppRouting: Route[] = [
  {
    path: 'signin',
    loadChildren: () => import('./modules/auth/signin/signin.module').then(m => m.SigninModule)
  },
  {
    path: 'councilors',
    loadChildren: () => import('./modules/councilors/councilors.module').then(m => m.CouncilorsModule)
  },
  {
    path: 'participate',
    loadChildren: () => import('./modules/participate/participate.module').then(m => m.ParticipateModule)
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'signin'
  }
];
