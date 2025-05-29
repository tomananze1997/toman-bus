import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent, ContactUsComponent, HomepageComponent, JoinUsComponent } from '@pages';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'join-us',
    component: JoinUsComponent
  },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
