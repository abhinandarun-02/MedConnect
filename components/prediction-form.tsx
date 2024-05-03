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

  const [disease, setDisease] = useState<string>('Not Found')
  const [description, setDescription] = useState<string>('Not Found')
  const [remedies, setRemedies] = useState<string>('Not Found')
  const [causes, setCauses] = useState<string>('Not Found')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const origin = true
      ? 'https://mutually-live-fox.ngrok-free.app'
      : 'http://127.0.0.1:5000'

    try {
      const response = await axios.get(
        `${origin}/predict?symptoms=${data.symptoms}`,
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

      const diseaseData = diseaseResponse.data

      setIsLoading(true)
      toast({
        description: 'Submitted Successfully',
      })
      setTimeout(() => {
        setIsLoading(false)
        setDisease(responseData.prediction)
        if (diseaseData[0]?.description) {
          setDescription(diseaseData[0].description)
          setRemedies(diseaseData[0].remedies)
          setCauses(diseaseData[0].causes)
          console.log(diseaseData[0])
        }
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
            className="gap-2 hover:scale-105 hover:bg-black"
          >
            {isLoading && <Loader2 className="animate-spin" />}
            Predict
          </Button>
        </form>
      </Form>
      {disease && (
        <div className="mt-8 flex flex-col gap-4">
          <h2 className="text-4xl font-medium">Prediction : {disease}</h2>
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
