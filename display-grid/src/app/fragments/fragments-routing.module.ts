import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadabilityComponent } from '../pages/readability/readability.component';
import { SubstitutionComponent } from '../pages/substitution/substitution.component';
import { ChoiceComponent } from '../pages/choice/choice.component';
import { SignatureComponent } from '../pages/signature/signature.component';
import { MemoryComponent } from '../pages/memory/memory.component';
import { PortfolioComponent } from '../pages/portfolio/portfolio.component';
import { AbstractComponent } from '../pages/abstract/abstract.component';
import { JournalComponent } from '../pages/journal/journal.component';


const routes: Routes = [
  { path: 'projects/reading-level', component: ReadabilityComponent },
  { path: 'projects/substitution-cipher', component: SubstitutionComponent },
  { path: 'projects/preference-polling', component: ChoiceComponent },
  { path: 'projects/signature-generator', component: SignatureComponent },
  { path: 'projects/mix-match', component: MemoryComponent },
  { path: 'projects/architecture-portfolio', component: PortfolioComponent },
  { path: "projects/idle-journal", component: JournalComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FragmentsRoutingModule { }
