'use client'

import { Button } from '@/components/ui/button'

const ButtonsPage = () => {
  return (
    <div className='q-4 space-y-4 flex flex-col max-w-[200px]'>
      <Button>Default</Button>
      <Button variant='primary'>Primary</Button>
      <Button variant='primaryOutline'>Primary Outline</Button>
      <Button variant='secondary'>secondary</Button>
      <Button variant='secondaryOutline'>secondary Outline</Button>
      <Button variant='danger'>danger</Button>
      <Button variant='dangerOutline'>danger Outline</Button>
      <Button variant='super'>Super</Button>
      <Button variant='superOutline'>Super Outline</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button variant='sidebar'>Sidebar</Button>
      <Button variant='sidebarOutline'>Sidebar Outline</Button>
    </div>
  )
}

export default ButtonsPage
