import { courses } from '@/db/schema'
import { useEffect } from 'react'

type Props = {
  courses: (typeof courses.$inferSelect)[]
  activeCourseIs: number
}

const List = ({ courses, activeCourseIs }: Props) => {
  return (
    <div className='pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]'>
      {courses.map((course) => (
        <div key={course.id}>{course.name}</div>
      ))}
    </div>
  )
}
export default List
