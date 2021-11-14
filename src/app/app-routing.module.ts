import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MyColorComponent } from './component/my-color/my-color.component';
import { InputDetailsComponent } from './component/input-details/input-details.component'
import { OutputDetailsComponent } from './component/output-details/output-details.component'


const routes: Routes = [
  {
    path: '',
    redirectTo: 'output',
    pathMatch: 'full'
  },
  // {
  //   path: 'home',
  //   component: MyColorComponent
  // },
  {
    path: 'input',
    component: InputDetailsComponent
  },
  {
    path: 'output',
    component: OutputDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
