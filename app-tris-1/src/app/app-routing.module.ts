import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameViewComponent } from './component/game-view/game-view.component';
import { TopViewComponent } from './component/top-view/top-view.component';

const routes: Routes = [
  { path: '', component: GameViewComponent },
  { path: 'top', component: TopViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
