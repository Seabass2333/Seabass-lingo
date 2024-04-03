'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useExitModal } from '@/store/use-exit-modal'
import Image from 'next/image'

const ExitModal = () => {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const { isOpen, close } = useExitModal()

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={close}
    >
      <DialogContent className='max-w-md'>
        <DialogHeader>
          <div className='flex items-center w-full justify-center mb-5'>
            <Image
              alt='Mascot'
              src='/mascot_sad.svg'
              width={80}
              height={80}
            />
          </div>
          <DialogTitle className='text-center font-bold text-2xl'>
            Wait, don&apos;t go!
          </DialogTitle>
          <DialogDescription className='text-center text-base'>
            Are you sure you want to leave? You will lose your progress.
          </DialogDescription>
          <DialogFooter className='mb-4'>
            <div className='flex flex-col gap-y-4 w-full'>
              {' '}
              <Button
                onClick={close}
                className='w-full'
                variant='primary'
                size='lg'
              >
                Keep learning
              </Button>
              <Button
                onClick={() => {
                  close()
                  router.push('/learn')
                }}
                className='w-full'
                variant='dangerOutline'
              >
                End session
              </Button>
            </div>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default ExitModal
