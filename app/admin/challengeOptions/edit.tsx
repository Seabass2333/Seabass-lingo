import {
  SimpleForm,
  required,
  TextInput,
  ReferenceInput,
  NumberInput,
  BooleanInput,
  Edit
} from 'react-admin'

const ChallengeOptionEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput
          source='text'
          validate={[required()]}
          label='Text'
        />
        <BooleanInput
          source='correct'
          label='Correct option'
        />
        <ReferenceInput
          source='challengeId'
          reference='challenges'
        />
        <NumberInput
          source='imageSrc'
          validate={[required()]}
          label='Image URL'
        />
        <NumberInput
          source='audioSrc'
          validate={[required()]}
          label='Audio URL'
        />
      </SimpleForm>
    </Edit>
  )
}

export default ChallengeOptionEdit
