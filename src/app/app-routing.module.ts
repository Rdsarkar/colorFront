import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MyColorComponent } from './component/my-color/my-color.component';
import { InputDetailsComponent } from './component/input-details/input-details.component'
import { OutputDetailsComponent } from './component/output-details/output-details.component'


const routes: Routes = [
  {
    path: '',
    redirectTo: 'input',
    pathMatch: 'full'
  },
  {
    path: 'input',
    component: InputDetailsComponent
  },
  {
    path: 'output/:subId/:sessionId/:year',
    component: OutputDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
