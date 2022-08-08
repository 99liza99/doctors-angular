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
  name: string;
  doctor: string;
  gender: string

}
