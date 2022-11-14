import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { Error_Component } from './404.component/404.component';
import { HelloComponent } from './hello.component';
import { OneComponent } from './one.component/one.component';
import { ThreeComponent } from './three.component/three.component';
import { TwoComponent } from './two.component/two.component';

const routes: Routes = [
  { path: 'one', component: OneComponent, 
    children: [
      {
        path: 'childa', // child route path
        component: HelloComponent, // child route component that the router renders
      },
    ],
    },
    { path: 'two', component: TwoComponent },
    { path: 'three', component: ThreeComponent },
    { path: '**', component: Error_Component },
  ];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
