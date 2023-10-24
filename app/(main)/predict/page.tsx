import { PredictionForm } from '@/components/prediction-form'

import axios from 'axios'
import { redirect } from 'next/navigation'

export default async function Prediction() {
  const response = await axios.get('http://127.0.0.1:5000/')
  if (response.data?.res != 'hello world') {
    redirect('/')
  }

  return (
    <div className="bg-fore m-12 rounded-2xl bg-white font-sans  drop-shadow-xl">
      <div className="flex w-full flex-col gap-4 px-6 py-24">
        <h1 className="text-4xl font-medium">Disease Prediction</h1>
        <PredictionForm />
      </div>
    </div>
  )
}
