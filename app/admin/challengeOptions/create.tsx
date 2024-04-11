import {
  SimpleForm,
  Create,
  required,
  TextInput,
  ReferenceInput,
  NumberInput,
  BooleanInput
} from 'react-admin'

const ChallengeOptionCreate = () => {
  return (
    <Create>
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
    </Create>
  )
}

export default ChallengeOptionCreate
