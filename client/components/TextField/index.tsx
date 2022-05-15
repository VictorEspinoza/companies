import React from 'react'
import { FieldValidator, useField } from 'formik'
import _ from 'lodash'

import * as Styled from './index.styles'

export interface Props {
  label: string
  value: string | number
  name: string
  // eslint-disable-next-line no-unused-vars
  onChange(value: string): void
  unit?: string
  placeholder?: string
  type?: string
  validate?: FieldValidator
}

const TextField: React.FC<Props> = ({ label, onChange, unit, placeholder, type, ...props }) => {
  const [field, meta] = useField({ name: props.name, validate: props.validate })
  const hasMetaError = !!meta.error
  const hasError: boolean = meta.touched && hasMetaError
  const labelText: string = hasError ? `${label} ${meta.error}` : label

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (_.isFunction(onChange) && !hasMetaError) {
      const { value } = event.target
      onChange(value)
    }

    field.onChange(event)
  }

  return (
    <Styled.Container>
      <Styled.LabelText hasError={hasError}>{labelText}</Styled.LabelText>

      <Styled.Input
        {...field}
        {...props}
        type={type || 'text'}
        value={field.value === undefined ? '' : field.value}
        onChange={handleChange}
        placeholder={placeholder || label}
      />

      {unit && <Styled.Unit>{unit}</Styled.Unit>}
    </Styled.Container>
  )
}

export default TextField
