import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from '../doctors';

@Component({
  selector: 'app-card-doctor',
  templateUrl: './card-doctor.component.html',
  styleUrls: ['./card-doctor.component.css'],
})
export class CardDoctorComponent implements OnInit {
  @Input() doctor: Doctor | undefined;
  constructor() {}

  ngOnInit(): void {}
}
