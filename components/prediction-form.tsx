'use client'

import { useState } from 'react'
import axios from 'axios'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { Loader2 } from 'lucide-react'
import { toast } from './ui/use-toast'
import { Separator } from './ui/separator'
import { ToastAction } from './ui/toast'
import { DoctorCard } from '@/app/(main)/doctors/_components/card'
import { Diseases, Doctor } from '@prisma/client'
import { useOrigin } from '@/lib/hooks/use-origin'

const FormSchema = z.object({
  symptoms: z
    .string()
    .min(3, {
      message: 'symptoms must be at least 3 characters.',
    })
    .max(160, {
      message: 'Bio must not be longer than 30 characters.',
    }),
})

export function PredictionForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  const [disease, setDisease] = useState<Diseases>()
  const [description, setDescription] = useState<string | null>('Not Found')
  const [remedies, setRemedies] = useState<string | null>('Not Found')
  const [causes, setCauses] = useState<string | null>('Not Found')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isFetched, setIsFetched] = useState<boolean>(false)
  const [doctors, setDoctors] = useState<Doctor[]>([])

  const origin = useOrigin()

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const ml_origin =
      process.env.NODE_ENV === 'production'
        ? 'https://mutually-live-fox.ngrok-free.app'
        : 'http://127.0.0.1:5000'

    try {
      const response = await axios.get(
        `${ml_origin}/predict?symptoms=${data.symptoms.replace(' ', '')}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': '64267',
          },
        }
      )
      const responseData = response.data
      if (!responseData.prediction) {
        return
      }
      const diseaseResponse = await axios.get(
        `/predict/${responseData.prediction}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': '64267',
          },
        }
      )

      const diseaseData = diseaseResponse.data[0] as Diseases

      setIsLoading(true)
      toast({
        description: 'Submitted Successfully',
      })
      setTimeout(async () => {
        setIsLoading(false)
        setDisease(diseaseData)
        const doctorsResponse = await axios.get(`${origin}/api/doctor`, {
          params: { speciality: diseaseData?.speciality },
        })
        setDoctors(doctorsResponse.data.slice(0, 2) as Doctor[])
        if (diseaseData?.description) {
          setDescription(diseaseData?.description)
          setRemedies(diseaseData?.remedies)
          setCauses(diseaseData?.causes)
        }
        setIsFetched(true)
      }, 2000)
    } catch (error) {
      console.error(error)
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
        action: <ToastAction altText="Try again">Try Again</ToastAction>,
      })
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="symptoms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter Your Symptoms</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Chills, Anxiety, ..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="gap-2 px-8 py-5 text-sm hover:scale-105"
          >
            {isLoading && <Loader2 className="animate-spin" />}
            Predict
          </Button>
        </form>
      </Form>
      <div className="grid grid-cols-2">
        {doctors.length > 0 &&
          doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
      </div>
      {isFetched && (
        <div className="mt-8 flex flex-col gap-4">
          <h2 className="text-4xl font-medium">
            Prediction : {disease?.disease}
          </h2>
          <div className="text-lg ">
            <h2 className="text-2xl font-semibold">Description</h2>
            <Separator />
            <div>{description}</div>
          </div>
          <div className="text-lg ">
            <h2 className="text-2xl font-semibold">Remedies</h2>
            <Separator />
            <div>{remedies}</div>
          </div>
          <div className="text-lg">
            <h2 className="text-2xl font-semibold">Causes</h2>
            <Separator />
            <div>{causes}</div>
          </div>
        </div>
      )}
    </>
  )
}
