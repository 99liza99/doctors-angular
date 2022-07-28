import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Doctor, Gender}  from '../doctors';
import { Observable } from 'rxjs';
import {
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import {GENDER} from '../doctors.const';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-page-appointment',
  templateUrl: './page-appointment.component.html',
  styleUrls: ['./page-appointment.component.css'],
})
export class PageAppointmentComponent implements OnInit {
  
  doctorForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[A-Z][a-z ]*')]],
    doctor: ['', Validators.required],
    picker: ['',Validators.required],
    gender: ['',Validators.required],
    specialization: ['',Validators.required],
    desc: ['',Validators.required],
  });
  
  
  doctors: Observable<Doctor[]> = this.doctorService.doctorList$;
  genders: Gender[]=GENDER;
  constructor(private doctorService: DoctorService, private fb: FormBuilder, ) {}
  
  @Output() newItemEvent = new EventEmitter<Doctor>();
  
  ngOnInit(): void {}

  onSubmit(form: FormGroup) {
    console.log(form.value);
    this.newItemEvent.emit(form.value);
  }
 
}


