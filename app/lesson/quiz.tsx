'use client'

import { useState } from 'react'

import { challengeOptions, challenges } from '@/db/schema'

import Header from './header'
import { QuestionBubble } from './question-bubble'
import { Challenge } from './challenge'
import { Footer } from './footer'

type Props = {
  initialPercentage: number
  initialHearts: number
  initialLessonId: number
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean
    challengeOptions: (typeof challengeOptions.$inferSelect)[]
  })[]
  userSubscription: any
}
const Quiz = ({
  initialPercentage,
  initialHearts,
  initialLessonId,
  initialLessonChallenges,
  userSubscription
}: Props) => {
  const [hearts, setHearts] = useState(initialHearts)
  const [percentage, setPercentage] = useState(initialPercentage)
  const [challenges, setChallenges] = useState(initialLessonChallenges)
  const [activeIndex, setActiveIndex] = useState(() => {
    const uncompletedIndex = challenges.findIndex(
      (challenge) => !challenge.completed
    )
    return uncompletedIndex === -1 ? 0 : uncompletedIndex
  })

  const [selectedOption, setSelectedOption] = useState<number>()
  const [status, setStatus] = useState<'correct' | 'wrong' | 'none'>('none')

  const challenge = challenges[activeIndex]
  const options = challenge.challengeOptions ?? []

  const onNext = () => {
    if (status === 'correct') {
      setHearts((prev) => prev + 1)
    } else if (status === 'wrong') {
      setHearts((prev) => prev - 1)
    }

    const nextIndex = activeIndex + 1
    if (nextIndex === challenges.length) {
      setPercentage((prev) => prev + 1)
      return
    }

    setActiveIndex(nextIndex)
    setStatus('none')
    setSelectedOption(undefined)
  }

  const onContinue = () => {
    if (status === 'correct') {
      setHearts((prev) => prev + 1)
    } else if (status === 'wrong') {
      setHearts((prev) => prev - 1)
    }

    const nextIndex = activeIndex + 1
    if (nextIndex === challenges.length) {
      setPercentage((prev) => prev + 1)
      return
    }

    setActiveIndex(nextIndex)
    setStatus('none')
    setSelectedOption(undefined)
  }

  const onSelect = (id: number) => {
    if (status !== 'none') return

    setSelectedOption(id)
  }

  const title =
    challenge.type === 'ASSIST'
      ? 'Select the correct option'
      : challenge.question
  return (
    <>
      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      ></Header>
      <div className='flex-1'>
        <div className='h-full flex items-center justify-center'>
          <div className='lg:min-h-[350px] lg:w-[600px] w-full px-6 lg:px-0 flex flex-col gap-y-12'>
            <h1 className='text-lg lg:text-3xl lg:text-start text-center font-bold text-neutral-700'>
              {title}
            </h1>
            <div>
              {challenge.type === 'ASSIST' && (
                <QuestionBubble question={challenge.question} />
              )}
              <Challenge
                options={options}
                onSelect={onSelect}
                status={status}
                selectedOption={selectedOption}
                disabled={false}
                type={challenge.type}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer
        disabled={!selectedOption}
        status={status}
        onCheck={onContinue}
      />
    </>
  )
}

export default Quiz
