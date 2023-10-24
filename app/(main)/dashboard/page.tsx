import Doctors from './components/doctors'
import Consultations from './components/consultations'
import RecentActivities from './components/activities'

export default function Home() {
  return (
    <div className="space-y-6 px-8 py-12">
      <div className="flex flex-col gap-4 2xl:flex-row">
        <Doctors />
        <Consultations />
      </div>
      <RecentActivities />
    </div>
  )
}
