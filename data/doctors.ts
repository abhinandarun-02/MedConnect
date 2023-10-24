interface doctorProps {
  id: number
  name: string
  speciality: string
  image: string
  rating: number
  noOfReviews: number
}

export const doctors: doctorProps[] = [
  {
    id: 1,
    name: 'Dr. John Doe',
    speciality: 'Dental Specialist',
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=80',
    rating: 5.0,
    noOfReviews: 200,
  },
  {
    id: 2,
    name: 'Dr. Darlene Robertson',
    speciality: 'Heart Specialist',
    image:
      'https://images.unsplash.com/photo-1641723345378-a701b30b2d36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=80',
    rating: 4.5,
    noOfReviews: 40,
  },
  {
    id: 3,
    name: 'Dr. Darekk Steward',
    speciality: 'Neuro Surgeon',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3xMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=80',
    rating: 3.8,
    noOfReviews: 60,
  },
  {
    id: 4,
    name: 'Dr. Cameroon Williamson',
    speciality: 'Cardiologist',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=80',
    rating: 4.6,
    noOfReviews: 80,
  },
  {
    id: 5,
    name: 'Dr. Emily Smith',
    speciality: 'Pediatrician',
    image:
      'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=80',
    rating: 4.9,
    noOfReviews: 150,
  },
  {
    id: 6,
    name: 'Dr. Sarah Johnson',
    speciality: 'Obstetrician-Gynecologist',
    image:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=80',
    rating: 4.7,
    noOfReviews: 120,
  },
  {
    id: 7,
    name: 'Dr. Michael Anderson',
    speciality: 'Orthopedic Surgeon',
    image:
      'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=80',
    rating: 4.4,
    noOfReviews: 90,
  },
  {
    id: 8,
    name: 'Dr. Melissa Turner',
    speciality: 'Dermatologist',
    image:
      'https://images.unsplash.com/photo-1643297654416-05795d62e39c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=80',
    rating: 4.8,
    noOfReviews: 100,
  },
  {
    id: 9,
    name: 'Dr. Richard Garcia',
    speciality: 'Ophthalmologist',
    image:
      'https://images.unsplash.com/photo-1550831107-1553da8c8464?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=80',
    rating: 4.9,
    noOfReviews: 130,
  },
  {
    id: 10,
    name: 'Dr. Samantha Hall',
    speciality: 'Psychiatrist',
    image:
      'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=80',
    rating: 4.7,
    noOfReviews: 110,
  },
  {
    id: 11,
    name: 'Dr. Sarah Williams',
    speciality: 'Oncologist',
    image:
      'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=80',
    rating: 4.9,
    noOfReviews: 150,
  },
  {
    id: 12,
    name: 'Dr. James Smith',
    speciality: 'Pulmonologist',
    image:
      'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=80',
    rating: 4.7,
    noOfReviews: 110,
  },
]
