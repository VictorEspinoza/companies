import React from 'react'
import CurrencyFormat from 'react-currency-format'
import Heading from '@client/components/Heading'
import { CompanyType } from '@client/graphql'
import * as Styled from './index.styles'

interface Props {
  companies?: CompanyType[]
}
const EMPTY_SPACE = ' '
const CompaniesOverview: React.FC<Props> = ({ companies = [] }) => (
  <div>
    <Heading>Companies overview</Heading>
    <Styled.Table>
      <thead>
        <tr>
          <Styled.TableHeader leftAligned>Company name</Styled.TableHeader>
          <Styled.TableHeader>stage</Styled.TableHeader>
          <Styled.TableHeader>sector</Styled.TableHeader>
          <Styled.TableHeader>investment size</Styled.TableHeader>
        </tr>
      </thead>
      <tbody>
        {companies.map((company, index) => (
          <Styled.TableRow key={`company-overview-${company.id}`} even={index % 2 === 0}>
            <Styled.TableCell leftAligned>{company.name}</Styled.TableCell>
            <Styled.TableCell>{company.stage}</Styled.TableCell>
            <Styled.TableCell>{company.sector}</Styled.TableCell>
            <Styled.TableCell>
              <CurrencyFormat value={company.investmentSize} displayType="text" thousandSeparator={EMPTY_SPACE} />
              &nbsp;EUR
            </Styled.TableCell>
          </Styled.TableRow>
        ))}
      </tbody>
    </Styled.Table>
  </div>
)

export default CompaniesOverview
