import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VersionMarchComponent } from './pages/version-march/version-march.component';
import { OverviewComponent } from './pages/overview/overview.component';


const routes: Routes = [
  { path: '', redirectTo: '/version-march', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'version-march', component: VersionMarchComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
