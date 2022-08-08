import { Doctor, Specialization, Gender } from './doctors';


export const DOCTORS: Doctor[] = [
  {
    _id: '1',
    img: 'assets/images/d1.jpg',
    name: 'Sahra Martin',
    specialization: 'Gastroenterologist',
    age: 25,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi maiores accusantium maxime eius nihil eveniet voluptate consequatur optio obcaecati voluptatem, corrupti laborum ex. Maiores neque ex, cumque optio quis esse.',
  },
  {
    _id: '2',
    img: 'assets/images/d2.webp',
    name: 'Hanna Davis',
    specialization: 'Pediatrician',
    age: 30,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis et ut placeat, optio nam atque ex necessitatibus nemo rem similique qu_idem fugit eos prov_ident eaque, voluptate debitis voluptatum! Ullam, in!',
  },
  {
    _id: '3',
    img: 'assets/images/d3.webp',
    name: 'Juhlia Peters',
    specialization: 'Therapist',
    age: 23,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione sint consequuntur velit amet, laborum repellendus hic eaque ducimus numquam odit ipsum, obcaecati inventore consectetur quo temporibus eius voluptate distinctio tempora.',
  },
  {
    _id: '4',
    img: 'assets/images/d4.jpg',
    name: 'Riley Gibson',
    specialization: 'Dentist',
    age: 53,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, hic. Dicta quas, officia nostrum temporibus quibusdam deserunt ut laboriosam rerum perferendis commodi velit quaerat, nesciunt, pariatur maiores cup_iditate qui excepturi.',
  },
];

export const SPECIALIZAIONS: Specialization[] = [
  {
    id: 1,
    value: 'Gastroenterologist',
  },
  {
    id: 2,
    value: 'Pediatrician',
  },
  {
    id: 3,
    value: 'Therapist',
  },
  {
    id: 4,
    value: 'Dentist',
  },
];

export const GENDER: Gender[] = [
  {
    id: 1,
    name: 'female',
  },
  {
    id: 2,
    name: 'male',
  },

   
];

