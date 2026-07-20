import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { trialFormSchema, type TrialFormValues } from '@/lib/schemas'

const SUBMIT_SIMULATED_DELAY_MS = 900

export function TrialForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TrialFormValues>({ resolver: zodResolver(trialFormSchema) })

  async function onSubmit() {
    // No backend yet — simulate submission latency for a realistic UX.
    await new Promise((resolve) => setTimeout(resolve, SUBMIT_SIMULATED_DELAY_MS))
    setIsSubmitted(true)
    reset()
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-3xl border border-white/15 bg-white/5 p-10 text-center">
        <CheckCircle2 className="h-8 w-8 text-accent" aria-hidden="true" />
        <p className="text-lg font-semibold text-white">You&apos;re on the list.</p>
        <p className="text-sm text-white/60">
          A member of our team will reach out within 24 hours to book your session.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <Input label="Full Name" placeholder="John Doe" error={errors.name?.message} {...register('name')} />
      <Input
        label="Email"
        type="email"
        placeholder="you@example.com"
        error={errors.email?.message}
        {...register('email')}
      />
      <Input
        label="Phone Number"
        type="tel"
        placeholder="+971 50 000 0000"
        error={errors.phone?.message}
        {...register('phone')}
      />
      <Button type="submit" variant="accent" size="lg" disabled={isSubmitting} className="mt-2 w-full">
        {isSubmitting ? 'Booking...' : 'Book Your Free Trial'}
      </Button>
    </form>
  )
}
