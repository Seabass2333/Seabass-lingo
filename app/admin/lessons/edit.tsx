import {
  SimpleForm,
  required,
  TextInput,
  ReferenceInput,
  NumberInput,
  Edit
} from 'react-admin'

const LessonEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput
          source='title'
          validate={[required()]}
          label='Title'
        />
        <TextInput
          source='description'
          validate={[required()]}
          label='Description'
        />
        <ReferenceInput
          source='unitId'
          reference='units'
        />
        <NumberInput
          source='order'
          validate={[required()]}
          label='Order'
        />
      </SimpleForm>
    </Edit>
  )
}

export default LessonEdit
