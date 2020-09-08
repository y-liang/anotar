import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { TopBarComponent } from './bars/top-bar/top-bar.component';
import { BottomBarComponent } from './bars/bottom-bar/bottom-bar.component';
import { LeftPartComponent } from './parts/left-part/left-part.component';
import { CenterPartComponent } from './parts/center-part/center-part.component';
import { RightPartComponent } from './parts/right-part/right-part.component';
import { RecordTreeComponent } from './panels/record-tree/record-tree.component';

const config = {
  apiKey: "AIzaSyADKch8c2unH_vKo4WhRen4_A96gWI_1HU",
  authDomain: "notesover.firebaseapp.com",
  databaseURL: "https://notesover.firebaseio.com",
  projectId: "notesover",
  storageBucket: "notesover.appspot.com",
  messagingSenderId: "431396080603",
  appId: "1:431396080603:web:07038687ef28935effb5fe",
  measurementId: "G-8GCVLEBB15"
};

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BottomBarComponent,
    LeftPartComponent,
    CenterPartComponent,
    RightPartComponent,
    RecordTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    MatTreeModule,
    MatIconModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
