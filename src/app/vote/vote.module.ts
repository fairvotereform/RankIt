import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VoteComponent } from './pages/vote/vote.component';

import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ChoiceComponent } from './component/choice/choice.component';

export const routes:Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'not-found' },
  { path: 'not-found', pathMatch: 'full', component: NotFoundComponent },
  { path: ':id', component: VoteComponent },
];

@NgModule({
  declarations: [VoteComponent, NotFoundComponent, ChoiceComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class VoteModule { }
