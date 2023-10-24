type ActivityProps = {
  id: number
  doctorName: string
  date: string
  image: string
  content: string
}

export const activites: ActivityProps[] = [
  {
    id: 1,
    doctorName: 'James Smith',
    date: '20-10-2023',
    image:
      'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800&q=80',
    content:
      'Dr. Savannah Nguyen added two new conditions to your health record on November 4 regarding your symptoms.',
  },
]
