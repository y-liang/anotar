import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './bars/top-bar/top-bar.component';
import { ReadabilityComponent } from './pages/readability/readability.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { BottomBarComponent } from './bars/bottom-bar/bottom-bar.component';
import { SubstitutionComponent } from './pages/substitution/substitution.component';
import { ChoiceComponent } from './pages/choice/choice.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { SignatureComponent } from './pages/signature/signature.component';
import { MemoryComponent } from './pages/memory/memory.component';
import { AbstractComponent } from './pages/abstract/abstract.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ColorBarComponent } from './bars/color-bar/color-bar.component';
import { JournalComponent } from './pages/journal/journal.component';
import { LeftBarComponent } from './bars/left-bar/left-bar.component';




@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ReadabilityComponent,
    OverviewComponent,
    BottomBarComponent,
    SubstitutionComponent,
    ChoiceComponent,
    SignatureComponent,
    MemoryComponent,
    AbstractComponent,
    PortfolioComponent,
    ColorBarComponent,
    JournalComponent,
    LeftBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
