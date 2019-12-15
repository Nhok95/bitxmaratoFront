import { NgModule } from '@angular/core';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations'
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';

// Components
import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import { ResultsComponent } from './components/results/results.component';
import { SymptomsComponent } from './components/symptoms/symptoms.component';
import { Question2Component } from './components/question2/question2.component';
import { BooleansPipe } from './pipes/booleans.pipe';


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    ResultsComponent,
    SymptomsComponent,
    Question2Component,
    BooleansPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    MultiSelectModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
