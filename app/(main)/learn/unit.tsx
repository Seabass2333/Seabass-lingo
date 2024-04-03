import { lessons, units } from '@/db/schema'
import { UnitBanner } from './unit-banner'
import { LessonButton } from './lesson-button'

type Props = {
  id: number
  order: number
  title: string
  description: string
  lessons: (typeof lessons.$inferSelect & {
    completed: boolean
  })[]
  activeLesson:
    | (typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect
      })
    | undefined
  activeLessonPercentage: number
}

export const Unit = (props: Props) => {
  const {
    id,
    order,
    title,
    description,
    lessons,
    activeLesson,
    activeLessonPercentage
  } = props

  return (
    <div className='flex flex-col gap-6'>
      <UnitBanner
        title={title}
        description={description}
      />
      <div className='flex flex-col items-center relative pb-6'>
        {lessons.map((lesson, index) => {
          const isCurrent = activeLesson?.id === lesson.id
          const isLocked = !lesson.completed && !isCurrent
          return (
            <LessonButton
              key={lesson.id}
              id={lesson.id}
              index={index}
              totalCount={lessons.length - 1}
              current={isCurrent}
              locked={isLocked}
              percentage={activeLessonPercentage}
            />
          )
        })}
      </div>
    </div>
  )
}
