import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore , AngularFirestoreModule} from '@angular/fire/firestore';
import { ResultComponent } from './result/result.component';
@NgModule({
  declarations: [
    AppComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
