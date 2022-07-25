import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';
import { DoctorComponent } from './doctor/doctor.component';

const routes: Routes = [
  { path: '', redirectTo: '/doctors', pathMatch: 'full' },//Default patch
  { path: 'doctors', component: DoctorComponent },
  { path: 'detail/:id', component: DoctorDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
