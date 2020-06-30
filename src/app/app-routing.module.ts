import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {ContentComponent} from './component/content/content.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: ':id', component: ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing: true}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
