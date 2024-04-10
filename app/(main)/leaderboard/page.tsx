import { FeedWrapper } from '@/components/feed-wrapper'
import { Promo } from '@/components/promo'
import { Quests } from '@/components/quests'
import { StickyWrapper } from '@/components/sticky-wrapper'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { UserProgress } from '@/components/user-progress'
import {
  getTopTenUsers,
  getUserProgress,
  getUserSubscription
} from '@/db/queries'
import Image from 'next/image'
import { redirect } from 'next/navigation'
// import Items from './items'

const LeaderBoardPage = async () => {
  const [userProgress, userSubscription, topTenUsers] = await Promise.all([
    getUserProgress(),
    getUserSubscription(),
    getTopTenUsers()
  ])

  if (!userProgress || !userProgress.activeCourse) {
    redirect('/courses')
  }

  const isPro = !!userSubscription?.isActive

  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />
        {!isPro && <Promo />}
        <Quests points={userProgress.points} />
      </StickyWrapper>
      <FeedWrapper>
        <div className='flex flex-col w-full items-center'>
          <Image
            src='/leaderboard.svg'
            alt='LeaderBoard'
            width={90}
            height={90}
          />
          <h1 className='text-center font-bold text-neutral-800'>
            LeaderBoard
          </h1>
          <p className='text-muted-foreground text-center text-lg mb-6'>
            See where you stand among other learners in the community!
          </p>
          <Separator className='mb-4 h-0.5 rounded-full' />
          {topTenUsers.map((user, index) => (
            <div
              key={user.userId}
              className='flex items-center w-full p-2 px-4 rounded-xl hover:bg-gray-200/50'
            >
              <span className='text-lime-700 font-bold mr-4'>{index + 1}</span>
              <Avatar className='border bg-green-500 h-12 w-12 ml-3 mr-6'>
                <AvatarImage
                  className='object-cover'
                  src={user.userImageSrc}
                />
              </Avatar>
              <h4 className='text-lg font-bold flex-1'>{user.userName}</h4>
              <p className='text-muted-foreground'>{user.points} XP</p>
            </div>
          ))}
        </div>
      </FeedWrapper>
    </div>
  )
}

export default LeaderBoardPage
