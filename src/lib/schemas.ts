import { z } from 'zod'

export const trialFormSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.email('Enter a valid email address'),
  phone: z.string().min(7, 'Enter a valid phone number'),
})

export type TrialFormValues = z.infer<typeof trialFormSchema>
