import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './components/question/question.component';
import { Question2Component } from './components/question2/question2.component';


const routes: Routes = [
  { path: '', redirectTo: '/question', pathMatch: 'full' },
  { path: 'question', component: QuestionComponent},
  { path: 'question2', component: Question2Component},
  { path: '**', redirectTo: '/question'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
