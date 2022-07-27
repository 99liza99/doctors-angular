import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
// import { ModalFormComponent } from './modal-form/modal-form.component';
import { FormPageComponent } from './form-page/form-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/doctors', pathMatch: 'full' },//Default patch
  { path: 'doctors', component: DoctorComponent },
  { path: 'add-doctor', component: FormPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
