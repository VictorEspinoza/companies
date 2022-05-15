import React, { useState, useEffect } from 'react'

import Sector from '@client/components/Sector'
import Heading from '@client/components/Heading'
import { CompanyType } from '@client/graphql'
import * as Styled from './index.styles'

interface Props {
  data?: CompanyType[]
}

interface CompanyData {
  [key: string]: { count: number; sector: string }
}

const CompaniesBySectors: React.FC<Props> = ({ data = [] }) => {
  const [companies, setCompanies] = useState<CompanyData>({})

  useEffect(() => {
    const companiesData = data.reduce((accumulator: CompanyData, company: CompanyType) => {
      if (accumulator[company.sector]) {
        accumulator[company.sector].count += 1
      } else {
        accumulator[company.sector] = { sector: company.sector, count: 1 }
      }
      return { ...accumulator }
    }, {})
    setCompanies(companiesData)
  }, [data, setCompanies])

  if (!Object.keys(companies).length) {
    return null
  }

  return (
    <Styled.Section>
      <Heading> Companies by sector </Heading>
      <Styled.Row>
        {Object.keys(companies).map((key: string) => (
          <Sector key={`sector-${key}`} sector={companies[key].sector} count={companies[key].count} />
        ))}
      </Styled.Row>
    </Styled.Section>
  )
}

export default CompaniesBySectors
