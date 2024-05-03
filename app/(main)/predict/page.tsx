import { PredictionForm } from '@/components/prediction-form'

import axios from 'axios'
import { redirect } from 'next/navigation'

export default async function Prediction() {
  const origin =
    process.env.NODE_ENV === 'production'
      ? 'https://mutually-live-fox.ngrok-free.app'
      : 'http://127.0.0.1:5000'
  const response = await axios.get(origin, {
    headers: {
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': '64267',
    },
  })
  if (response.data?.res != 'hello world') {
    redirect('/')
  }

  return (
    <div className="bg-fore m-12 rounded-2xl bg-white font-sans  drop-shadow-xl">
      <div className="flex w-full flex-col gap-4 px-6 py-12">
        <h1 className="text-4xl font-medium">Disease Prediction</h1>
        <PredictionForm />
      </div>
    </div>
  )
}
