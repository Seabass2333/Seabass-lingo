import { getLesson, getUserProgress, getUserSubscription } from '@/db/queries'
import { redirect } from 'next/navigation'
import Quiz from '../quiz'

type Props = {
  params: {
    lessonId: number
  }
}

const LessonPage = async ({ params: { lessonId } }: Props) => {
  const lessonData = getLesson(lessonId)
  const userProgressData = getUserProgress()
  const userSubscriptionData = getUserSubscription()

  const [lesson, userProgress, userSubscription] = await Promise.all([
    lessonData,
    userProgressData,
    userSubscriptionData
  ])

  if (!lesson || !userProgress) {
    redirect('/learn')
  }

  const initialPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100

  return (
    <Quiz
      initialPercentage={initialPercentage}
      initialHearts={userProgress.hearts}
      initialLessonId={lesson.id}
      initialLessonChallenges={lesson.challenges}
      userSubscription={userSubscription}
    ></Quiz>
  )
}

export default LessonPage
