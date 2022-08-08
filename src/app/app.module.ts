import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from '../material.module';
import { AppComponent } from './app.component';
import { DoctorComponent } from './doctor/doctor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { ModalComponent } from './modal/modal.component';
import { AppRoutingModule } from './app-routing.module';
import { DoctorFormComponent } from './doctor-form/doctor-form.component';
import { PageAppointmentComponent } from './page-appointment/page-appointment.component';
import { CardDoctorComponent } from './card-doctor/card-doctor.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    ModalComponent,
    DoctorFormComponent,
    PageAppointmentComponent,
    CardDoctorComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
