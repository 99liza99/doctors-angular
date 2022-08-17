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
import { ConfirmComponent } from './confirm/confirm.component';
import { ArraySortPipe } from './pipes/sort.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    ModalComponent,
    DoctorFormComponent,
    PageAppointmentComponent,
    CardDoctorComponent,
    TableComponent,
    ConfirmComponent,
    ArraySortPipe,
    FilterPipe
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
    Ng2SearchPipeModule,
      ],
  providers: [ArraySortPipe, FilterPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
