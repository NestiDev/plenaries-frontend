import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CouncilorsRouting } from './councilors.routing';
import { CouncilorsComponent } from './councilors.component';

import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
  declarations: [CouncilorsComponent],
  imports: [
    CommonModule,

    HeaderComponent,

    RouterModule.forChild(CouncilorsRouting)
  ]
})

export class CouncilorsModule {}
