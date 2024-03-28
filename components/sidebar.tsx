import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import SidebarItem from './sidebar-item'
import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs'
import { Loader } from 'lucide-react'

type Props = {
  className?: string
}

const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        'lg:w-[256px] h-full lg:fixed left-0 top-0 px-4 border-r-2 flex-col',
        className
      )}
    >
      <Link href='/learn'>
        <div className='pt-8 pl-4 pb-7 flex items-center gap-x-3'>
          <Image
            alt='Mascot'
            src='/mascot.svg'
            height={40}
            width={40}
          />
          <h1 className='text-2xl font-extrabold text-green-600 tracking-wide'>
            LuLingo
          </h1>
        </div>
      </Link>
      <div className='flex flex-col gap-y-2 flex-1'>
        <SidebarItem
          label='learn'
          href='/learn'
          iconSrc='/learn.svg'
        />
        <SidebarItem
          label='leaderboard'
          href='/leaderboard'
          iconSrc='/leaderboard.svg'
        />
        <SidebarItem
          label='quests'
          href='/quests'
          iconSrc='/quests.svg'
        />
        <SidebarItem
          label='shop'
          href='/shop'
          iconSrc='/shop.svg'
        />
      </div>
      <div className='p-4'>
        <ClerkLoading>
          <Loader className='h-5 w-5 text-muted-foreground animate-spin' />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl='/' />
        </ClerkLoaded>
      </div>
    </div>
  )
}

export default Sidebar
