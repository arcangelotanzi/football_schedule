import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchComponent } from './match/match.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: MatchComponent

},
/*{
  path: 'teamDetails/:id/playerDetails/:playerid',
  redirectTo: 'playerDetails/:playerid'
},*/
{
  path:"matchDetails/:matchid",

  component: MatchComponent
},
{
  path:"teamDetails/:id",
  redirectTo: 'teamDetails/:idTeam',

  component: TeamComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
