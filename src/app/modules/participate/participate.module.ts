import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ParticipateRouting } from './participate.routing';
import { ParticipateComponent } from './participate.component';

import { HeaderComponent } from '../../components/header/header.component';
import { ResultsComponent } from '../../components/results/results.component';

import { ResultsService } from '../../shared/services/results.service';

@NgModule({
  declarations: [ParticipateComponent ],
  imports: [
    CommonModule,
    HeaderComponent,
    ResultsComponent,
    
    RouterModule.forChild(ParticipateRouting)
  ],
  providers: [ResultsService],
})

export class ParticipateModule {}
