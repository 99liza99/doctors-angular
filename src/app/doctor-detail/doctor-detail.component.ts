import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DoctorService } from '../doctor.service';
import { Doctor } from '../doctors';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.css'],
})
export class DoctorDetailComponent implements OnInit {
  doctor: Doctor | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.getDoctor();
  }

  getDoctor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.doctorService.getDoctor(id)
      .subscribe(doctor => this.doctor = doctor);
  }
}
