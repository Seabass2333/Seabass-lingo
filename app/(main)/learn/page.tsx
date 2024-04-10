import { redirect } from 'next/navigation'

import { FeedWrapper } from '@/components/feed-wrapper'
import { StickyWrapper } from '@/components/sticky-wrapper'
import { UserProgress } from '@/components/user-progress'
import {
  getCourseProgress,
  getLessonPercentage,
  getUnits,
  getUserProgress,
  getUserSubscription
} from '@/db/queries'
import { lessons, units as unitsSchema } from '@/db/schema'

import { Header } from './header'
import { Unit } from './unit'

const LearnPage = async () => {
  const [
    userProgress,
    courseProgress,
    lessonPercentage,
    units,
    userSubscription
  ] = await Promise.all([
    getUserProgress(),
    getCourseProgress(),
    getLessonPercentage(),
    getUnits(),
    getUserSubscription()
  ])

  if (!userProgress || !userProgress.activeCourse) {
    redirect('/courses')
  }

  if (!courseProgress) {
    redirect('/courses')
  }
  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={!!userSubscription?.isActive}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
        {units.map((unit) => (
          <Unit
            key={unit.id}
            order={unit.order}
            id={unit.id}
            title={unit.title}
            description={unit.description}
            lessons={unit.lessons}
            activeLesson={
              courseProgress.activeLesson as
                | (typeof lessons.$inferSelect & {
                    unit: typeof unitsSchema.$inferSelect
                  })
                | undefined
            }
            activeLessonPercentage={lessonPercentage}
          />
        ))}
      </FeedWrapper>
    </div>
  )
}

export default LearnPage
