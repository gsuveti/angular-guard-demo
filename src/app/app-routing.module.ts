import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Feature1Component} from './feature1/feature1.component';
import {Permissions} from './util/Permissions';
import {Feature2Component} from './feature2/feature2.component';
import CanActivateFeature2 from './util/CanActivateFeature2';

const routes: Routes = [
  {
    path: 'feature1',
    component: Feature1Component,
    canActivate: ['canActivateFeature']
  },
  {
    path: 'feature2',
    component: Feature2Component,
    canActivate: [CanActivateFeature2]
  },
  {
    path: 'feature2/:id',
    component: Feature2Component,
    canActivate: [CanActivateFeature2]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: 'canActivateFeature',
      useValue: Permissions.getPermissionForFeature1
    },
    CanActivateFeature2
  ]
})
export class AppRoutingModule {
}
