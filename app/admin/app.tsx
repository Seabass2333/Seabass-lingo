'use client'

import { Admin, Resource } from 'react-admin'
import simpleRestProvider from 'ra-data-simple-rest'

import CourseList from './course/list'
import CourseCreate from './course/create'
import CourseEdit from './course/edit'

import UnitList from './unit/list'
import UnitCreate from './unit/create'
import UnitEdit from './unit/edit'

import LessonList from './lessons/list'
import LessonCreate from './lessons/create'
import LessonEdit from './lessons/edit'

import ChallengeCreate from './challenges/create'
import ChallengeEdit from './challenges/edit'
import ChallengeList from './challenges/list'
import ChallengeOptionList from './challengeOptions/list'
import ChallengeOptionCreate from './challengeOptions/create'
import ChallengeOptionEdit from './challengeOptions/edit'

const dataProvider = simpleRestProvider('/api')

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name='courses'
        list={CourseList}
        create={CourseCreate}
        edit={CourseEdit}
        recordRepresentation='title'
      />
      <Resource
        name='units'
        list={UnitList}
        create={UnitCreate}
        edit={UnitEdit}
        recordRepresentation='title'
      />
      <Resource
        name='lessons'
        list={LessonList}
        create={LessonCreate}
        edit={LessonEdit}
        recordRepresentation='title'
      />
      <Resource
        name='challenges'
        list={ChallengeList}
        create={ChallengeCreate}
        edit={ChallengeEdit}
        recordRepresentation='question'
      />
      <Resource
        name='challengeOptions'
        list={ChallengeOptionList}
        create={ChallengeOptionCreate}
        edit={ChallengeOptionEdit}
        recordRepresentation='text'
        options={{ label: 'Challenge Options' }}
      />
    </Admin>
  )
}

export default App
