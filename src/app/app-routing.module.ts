import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ModalFormComponent } from './modal-form/modal-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/doctors', pathMatch: 'full' },//Default patch
  { path: 'doctors', component: DoctorComponent },
  { path: 'detail/:id', component: DoctorDetailComponent },
  { path: 'add-doctor', component: ModalFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
