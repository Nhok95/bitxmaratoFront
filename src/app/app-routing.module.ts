import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';


const routes: Routes = [
  { path: '', redirectTo: '/question', pathMatch: 'full' },
  { path: 'question', component: Component1Component},
  { path: 'question2', component: Component2Component},
  { path: '**', redirectTo: '/question'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
