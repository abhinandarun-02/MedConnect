type consultationProps = {
  id: number
  doctorName: string
  speciality: string
  image: string
  date: string
  slot: string
}
export const consultations: consultationProps[] = [
  {
    id: 9,
    doctorName: 'Dr. Richard Garcia',
    speciality: 'Ophthalmologist',
    image:
      'https://images.unsplash.com/photo-1550831107-1553da8c8464?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=80',
    date: '27 Oct 2023',
    slot: '11:00-12:00 AM',
  },
  {
    id: 10,
    doctorName: 'Dr. Samantha Hall',
    speciality: 'Psychiatrist',
    image:
      'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=80',
    date: '27 Oct 2023',
    slot: '3:00-4:00 PM',
  },
]
