import React from 'react'
import { FieldValidator, useField } from 'formik'
import _ from 'lodash'

import * as Styled from './index.styles'

interface Props {
  label: string
  name: string
  value: string
  options: Record<string, string>
  notSelectedLabel: string
  validate?: FieldValidator
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void
}

const Select: React.FC<Props> = ({ onChange, options, notSelectedLabel, label, ...props }) => {
  const [field, meta] = useField({ name: props.name, validate: props.validate })

  const hasError: boolean = meta.touched && !!meta.error
  const labelText: string = hasError ? `${label} ${meta.error}` : label

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (_.isFunction(onChange)) {
      onChange(event.target.value)
    }

    field.onChange(event)
  }

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.LabelText hasError={hasError}>{labelText}</Styled.LabelText>
        <Styled.Select
          {...field}
          {...props}
          value={field.value === undefined ? '' : field.value}
          onChange={handleChange}
        >
          <option value="">{notSelectedLabel}</option>
          {Object.keys(options).map(key => (
            <option key={`${props.name}-${key}`} value={key}>
              {options[key]}
            </option>
          ))}
        </Styled.Select>
      </Styled.Wrapper>
    </Styled.Container>
  )
}

export default Select
