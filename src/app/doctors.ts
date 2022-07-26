export interface Doctor {
  img: string;
  _id: string;
  name: string;
  specialization: string;
  description: string;
  age: number;
}

export interface Specialization {
  id: number;
  value: string;
}

export interface Gender {
  id: number;
  name: string;
}
export interface Appoitment {
  _id: string;
  name: string;
  doctor_id: string;
  doctor: string;
  gender: string;
  picker: string;
  comment: string;
}

