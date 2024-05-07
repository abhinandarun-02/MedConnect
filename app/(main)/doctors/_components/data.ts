export type FilterType = {
  name: string

  value: string
}

export const specialties: FilterType[] = [
  {
    name: 'All',
    value: 'all',
  },
  {
    name: 'Internal Medicine',
    value: 'ime',
  },
  {
    name: 'Gastroenterology',
    value: 'gas',
  },
  {
    name: 'Pulmonology',
    value: 'pul',
  },
  {
    name: 'Orthopedics',
    value: 'orp',
  },
  {
    name: 'Neurology',
    value: 'neu',
  },
  {
    name: 'Cardiology',
    value: 'car',
  },
  {
    name: 'Endocrinology',
    value: 'end',
  },
  {
    name: 'Pharmacology',
    value: 'pha',
  },
  {
    name: 'Urology',
    value: 'uro',
  },
  {
    name: 'Dermatology',
    value: 'der',
  },
  {
    name: 'Rheumatology',
    value: 'rhe',
  },
]

export const AppointmentType: FilterType[] = [
  {
    name: 'All',
    value: 'all',
  },

  {
    name: 'Video Consultation',
    value: 'video',
  },

  {
    name: 'In Person',
    value: 'physical',
  },
]

export const Gender: FilterType[] = [
  {
    name: 'All',
    value: 'all',
  },
  {
    name: 'Male',
    value: 'male',
  },
  {
    name: 'Female',
    value: 'female',
  },
]

export const Language: FilterType[] = [
  {
    name: 'All',
    value: 'all',
  },
  {
    name: 'English',
    value: 'en',
  },
  {
    name: 'Spanish',
    value: 'es',
  },
  {
    name: 'French',
    value: 'fr',
  },
  {
    name: 'German',
    value: 'de',
  },
  {
    name: 'Italian',
    value: 'it',
  },
  {
    name: 'Chinese',
    value: 'zh',
  },
  {
    name: 'Japanese',
    value: 'ja',
  },
  {
    name: 'Korean',
    value: 'ko',
  },
  {
    name: 'Russian',
    value: 'ru',
  },
  {
    name: 'Hindi',
    value: 'hi',
  },
]

export type DoctorType = {
  id: number
  name: string
  speciality: string
  image: string
  location: string
  experience: number
  verified: boolean
  languages: string[]
  rating: number
  reviews: number
  endorsements: number
}

export const doctors: DoctorType[] = [
  {
    id: 1,
    name: 'Dr. Smith',
    speciality: 'Cardiologist',
    image:
      'https://www.doctify.com/origin/athena-uk/hermes/media/specialists/professor-howard-branley/professor-howard-branley.webp',
    location: 'New York',
    experience: 15,
    verified: true,
    languages: ['English', 'Spanish'],
    rating: 4.8,
    reviews: 120,
    endorsements: 35,
  },
  {
    id: 2,
    name: 'Dr. Johnson',
    speciality: 'Dermatologist',
    image:
      'https://www.doctify.com/origin/athena-uk/hermes/media/specialists/mr-christian-brown/mr-christian-brown.webp',
    location: 'Los Angeles',
    experience: 12,
    verified: true,
    languages: ['English', 'French'],
    rating: 4.5,
    reviews: 90,
    endorsements: 28,
  },
  {
    id: 3,
    name: 'Dr. Garcia',
    speciality: 'Orthopedic Surgeon',
    image:
      'https://www.doctify.com/origin/athena-uk/hermes/media/specialists/mr-dimitri-yanni/mr-dimitri-yanni.webp',
    location: 'Chicago',
    experience: 18,
    verified: true,
    languages: ['English', 'Spanish'],
    rating: 4.9,
    reviews: 150,
    endorsements: 42,
  },
  {
    id: 4,
    name: 'Dr. Wang',
    speciality: 'Pediatrician',
    image:
      'https://www.doctify.com/origin/athena-uk/hermes/media/specialists/mr-declan-cahill/mr-declan-cahill.webp',
    location: 'Houston',
    experience: 10,
    verified: true,
    languages: ['English', 'Mandarin'],
    rating: 4.7,
    reviews: 80,
    endorsements: 25,
  },
  {
    id: 5,
    name: 'Dr. Patel',
    speciality: 'Ophthalmologist',
    image:
      'https://www.doctify.com/origin/athena-uk/hermes/media/specialists/professor-howard-branley/professor-howard-branley.webp',
    location: 'San Francisco',
    experience: 14,
    verified: true,
    languages: ['English', 'Hindi'],
    rating: 4.6,
    reviews: 100,
    endorsements: 30,
  },
  {
    id: 6,
    name: 'Dr. Kim',
    speciality: 'Gynecologist',
    image:
      'https://www.doctify.com/origin/athena-uk/hermes/media/specialists/professor-howard-branley/professor-howard-branley.webp',
    location: 'Miami',
    experience: 16,
    verified: true,
    languages: ['English', 'Korean'],
    rating: 4.8,
    reviews: 110,
    endorsements: 38,
  },
  {
    id: 7,
    name: 'Dr. Davis',
    speciality: 'Neurologist',
    image:
      'https://www.doctify.com/origin/athena-uk/hermes/media/specialists/professor-howard-branley/professor-howard-branley.webp',
    location: 'Seattle',
    experience: 20,
    verified: true,
    languages: ['English', 'French'],
    rating: 4.9,
    reviews: 130,
    endorsements: 40,
  },
  {
    id: 8,
    name: 'Dr. Hernandez',
    speciality: 'Rheumatologist',
    image:
      'https://www.doctify.com/origin/athena-uk/hermes/media/specialists/professor-howard-branley/professor-howard-branley.webp',
    location: 'Dallas',
    experience: 13,
    verified: true,
    languages: ['English', 'Spanish'],
    rating: 4.7,
    reviews: 95,
    endorsements: 32,
  },
  {
    id: 9,
    name: 'Dr. Nguyen',
    speciality: 'ENT Specialist',
    image:
      'https://www.doctify.com/origin/athena-uk/hermes/media/specialists/professor-howard-branley/professor-howard-branley.webp',
    location: 'Atlanta',
    experience: 11,
    verified: true,
    languages: ['English', 'Vietnamese'],
    rating: 4.5,
    reviews: 85,
    endorsements: 26,
  },
  {
    id: 10,
    name: 'Dr. Taylor',
    speciality: 'Psychiatrist',
    image:
      'https://www.doctify.com/origin/athena-uk/hermes/media/specialists/professor-howard-branley/professor-howard-branley.webp',
    location: 'Denver',
    experience: 17,
    verified: true,
    languages: ['English'],
    rating: 4.8,
    reviews: 125,
    endorsements: 36,
  },
]
