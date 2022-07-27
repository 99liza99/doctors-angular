import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
// import { ModalFormComponent } from './modal-form/modal-form.component';
import { PageAppointmentComponent } from './page-appointment/page-appointment.component';

const routes: Routes = [
  { path: '', redirectTo: '/doctors', pathMatch: 'full' },//Default patch
  { path: 'doctors', component: DoctorComponent },
  { path: 'appointment', component: PageAppointmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
