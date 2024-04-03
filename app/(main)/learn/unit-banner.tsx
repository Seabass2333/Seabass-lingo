import { Button } from '@/components/ui/button'
import { NotebookText } from 'lucide-react'
import Link from 'next/link'

type Props = {
  title: string
  description: string
}
export const UnitBanner = (props: Props) => {
  const { title, description } = props

  return (
    <div className='w-full flex items-center justify-between rounded-xl bg-green-500 p-5 text-white'>
      <div className='space-y-2.5'>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <p className='text-lg'>{description}</p>
      </div>
      <Link href='/lesson'>
        <Button
          size='lg'
          variant='secondary'
          className='hidden xl:flex border-2 border-b-4 active:border-b-2'
        >
          <NotebookText className='mr-2' />
          Continue
        </Button>
      </Link>
    </div>
  )
}
