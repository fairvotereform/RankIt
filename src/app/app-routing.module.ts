import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routes:Routes = [
  {path: '', pathMatch: 'full', loadChildren: './public/public.module#PublicModule'},
  { path: 'polls', loadChildren: './polls/polls.module#PollsModule' },
  { path: 'vote', loadChildren: './vote/vote.module#VoteModule' },
  { path: 'results', loadChildren: './results/results.module#ResultsModule' },
  { path: 'account', loadChildren: './account/account.module#AccountModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
