export interface Doctor {
  img: string;
  id: number;
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
