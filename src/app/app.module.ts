import { NgModule }                 from '@angular/core';

// Modules
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { HttpClientModule }         from '@angular/common/http' 
import { AppRoutingModule }         from './app-routing.module';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations'
import { ButtonModule }             from 'primeng/button';
import { MultiSelectModule }        from 'primeng/multiselect';
import { CheckboxModule }           from 'primeng/checkbox';

// Components
import { AppComponent }             from './app.component';
import { Component1Component }      from './components/component1/component1.component';
import { Component2Component }      from './components/component2/component2.component';
import { ResultsComponent }         from './components/results/results.component';
import { BooleansPipe }             from './pipes/booleans.pipe';


@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    ResultsComponent,
    BooleansPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
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
