import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctors';
import { DOCTORS } from '../doctors.const';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  doctors: Doctor[] = DOCTORS;

  constructor() { }

  ngOnInit(): void {
  }

}
