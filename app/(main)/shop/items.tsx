'use client'

import { toast } from 'sonner'
import { useTransition } from 'react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { POINTS_TO_REFILL } from '@/constants'
import { refillHearts } from '@/actions/user-progress'
import { createStripeUrl } from '@/actions/user-subscription'

type ItemsProps = {
  hearts: number
  points: number
  hasActiveSubscription: boolean
}
const Items = ({ hearts, points, hasActiveSubscription }: ItemsProps) => {
  const [pending, startTransition] = useTransition()

  const onRefillHearts = () => {
    if (pending || hearts === 5 || points < POINTS_TO_REFILL) return
    startTransition(() => {
      refillHearts().catch(() => toast.error('Not enough points'))
    })
  }

  const onUpgrade = () => {
    if (pending) return
    startTransition(() => {
      // Upgrade subscription
      createStripeUrl()
        .then((res) => {
          if (res.data) {
            window.location.href = res.data
          }
        })
        .catch(() => toast.error('Failed to upgrade subscription'))
    })
  }

  return (
    <ul className='w-full'>
      <div className='flex items-center w-full p-4 gap-x-4 border-t-2'>
        <Image
          src='/heart.svg'
          alt='Heart'
          width={60}
          height={60}
        />
        <div className='flex-1'>
          <p className='text-neutral-700 text-base lg:text-xl font-bold'>
            Refill hearts
          </p>
        </div>
        <Button
          onClick={onRefillHearts}
          disabled={pending || hearts === 5 || points < POINTS_TO_REFILL}
        >
          {hearts === 5 ? (
            'full'
          ) : (
            <div className='flex items-center'>
              <Image
                src='/points.svg'
                alt='Point'
                width={20}
                height={20}
              />
              <p>{POINTS_TO_REFILL}</p>
            </div>
          )}
        </Button>
      </div>
      <div className='flex items-center w-full p-4 pt-8 gap-x-4 border-t-2'>
        <Image
          src='/unlimited.svg'
          alt='Unlimited'
          width={60}
          height={60}
        />
        <div className='flex-1'>
          <p className='text-neutral-700 text-base lg:text-xl font-bold'>
            Unlimited hearts
          </p>
        </div>
        <Button
          disabled={pending}
          onClick={onUpgrade}
        >
          {hasActiveSubscription ? 'settings' : 'upgrade'}
        </Button>
      </div>
    </ul>
  )
}

export default Items
