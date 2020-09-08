import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadabilityComponent } from './pages/readability/readability.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { SubstitutionComponent } from './pages/substitution/substitution.component';
import { ChoiceComponent } from './pages/choice/choice.component';
import { SignatureComponent } from './pages/signature/signature.component';
import { MemoryComponent } from './pages/memory/memory.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AbstractComponent } from './pages/abstract/abstract.component';
import { ColorBarComponent } from './bars/color-bar/color-bar.component';
import { JournalComponent } from './pages/journal/journal.component';


const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'projects/reading-level', component: ReadabilityComponent },
  { path: 'projects/substitution-cipher', component: SubstitutionComponent },
  { path: 'projects/preference-polling', component: ChoiceComponent },
  { path: 'projects/signature-generator', component: SignatureComponent },
  { path: 'projects/mix-match', component: MemoryComponent },
  { path: 'projects/architecture-portfolio', component: PortfolioComponent },
  { path: "projects/yan's-resume", component: AbstractComponent },
  { path: "projects/idle-journal", component: JournalComponent },

  { path: "color", component: ColorBarComponent },









];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
