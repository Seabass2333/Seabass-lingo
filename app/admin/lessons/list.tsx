import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField
} from 'react-admin'

const LessonList = () => {
  return (
    <List>
      <Datagrid rowClick='edit'>
        <TextField source='id' />
        <TextField source='title' />
        <TextField source='description' />
        <ReferenceField
          source='courseId'
          reference='courses'
        />
        <NumberField source='order' />
      </Datagrid>
    </List>
  )
}

export default LessonList
