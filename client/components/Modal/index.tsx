import React, { useState } from 'react'
import { Formik } from 'formik'
import TextField from '@client/components/TextField'
import Select from '@client/components/Select'
import _ from 'lodash'
import Button from '@client/components/Button'

import * as Styled from './index.styles'

interface Props {
  onClose: () => void
  // eslint-disable-next-line no-unused-vars
  onSubmit: (variables: Record<any, any>) => void
}

const STAGES: { [key: string]: string } = {
  prototype: 'Prototype',
  idea: 'Idea',
  series_a: 'Series A',
  series_b: 'Series B',
  series_c: 'Series C',
  seed: 'Seed',
}

const SECTORS: { [key: string]: string } = {
  fintech: 'Fintech',
  iot: 'IOT',
  roboadvisory: 'Roboadvisory',
  insuretech: 'Insuretech',
}

const Modal: React.FC<Props> = ({ onClose, onSubmit }) => {
  const [companyName, setCompanyName] = useState('')
  const [investmentSize, setInvestmentSize] = useState('')
  const [stage, setStage] = useState('')
  const [sector, setSector] = useState('')

  const submitForm = (values: { companyName: string; stage: string; sector: string; investmentSize: number }) => {
    onSubmit({
      variables: {
        name: values.companyName,
        stage: STAGES[values.stage],
        sector: SECTORS[values.sector],
        investmentSize: values.investmentSize,
      },
    })
    onClose()
  }

  const validateRequired = (value: string) => {
    let error
    if (!value) {
      error = ' is required field'
    }

    return error
  }

  const validateWholeNumber = (value: string) => {
    let error

    if (!value) {
      error = ' is required field'
    } else if (!_.isInteger(Number(value))) {
      error = ' is not a whole number'
    }

    return error
  }

  return (
    <Styled.Modal>
      <Styled.Header>
        <Styled.Content>
          <Styled.CloseIcon onClick={onClose} />
          <Styled.Heading>Add new company</Styled.Heading>
          <Styled.Description>
            Add new company by filling all the required fields, select from lists and be carefull, because integer is
            limited and not everyone can handle that
          </Styled.Description>
        </Styled.Content>
      </Styled.Header>
      <Formik
        initialValues={{ companyName, investmentSize: Number(investmentSize), stage, sector }}
        onSubmit={submitForm}
      >
        {({ handleSubmit }) => (
          <Styled.Form>
            <Styled.Body>
              <Styled.FormItem>
                <TextField
                  label="Company name"
                  placeholder="Company name"
                  value={companyName}
                  onChange={setCompanyName}
                  name="companyName"
                  validate={validateRequired}
                />
              </Styled.FormItem>
              <Styled.FormItem>
                <Select
                  value={stage}
                  label="Stage"
                  onChange={setSector}
                  name="stage"
                  validate={validateRequired}
                  options={STAGES}
                  notSelectedLabel="Select stage from list"
                />
              </Styled.FormItem>
              <Styled.FormItem>
                <Select
                  value={sector}
                  label="Sector"
                  onChange={setStage}
                  name="sector"
                  validate={validateRequired}
                  options={SECTORS}
                  notSelectedLabel="Select sector from list"
                />
              </Styled.FormItem>
              <Styled.FormItem>
                <TextField
                  label="Investment size"
                  placeholder="Enter amount"
                  type="number"
                  name="investmentSize"
                  unit="EUR"
                  value={investmentSize}
                  onChange={setInvestmentSize}
                  validate={validateWholeNumber}
                />
              </Styled.FormItem>
            </Styled.Body>
            <Styled.Footer>
              <Styled.AddCompanyButtonWrapper>
                <Styled.CancelButton onClick={onClose}>Cancel</Styled.CancelButton>
              </Styled.AddCompanyButtonWrapper>
              <Styled.AddCompanyButtonWrapper>
                <Button onClick={handleSubmit}>Add company</Button>
              </Styled.AddCompanyButtonWrapper>
            </Styled.Footer>
          </Styled.Form>
        )}
      </Formik>
    </Styled.Modal>
  )
}

export default Modal
