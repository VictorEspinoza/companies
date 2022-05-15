import { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { GET_COMPANIES, CompanyType, ADD_COMPANY } from '@client/graphql'
import CompaniesBySectors from '@client/components/CompaniesBySectors'
import CompaniesOverview from '@client/components/CompaniesOverview'
import CompaniesByInvestmentSize from '@client/components/CompaniesByInvestmentSize'
import Modal from '@client//components/Modal'
import * as Styled from './index.styles'

export function Page() {
  const { loading, error, data } = useQuery<{ companies: CompanyType[] }>(GET_COMPANIES)
  const [showModal, setShowModal] = useState<boolean>(false)

  const [addCompany] = useMutation(ADD_COMPANY)

  if (loading) {
    return <Styled.LoadingDiv>Loading data...</Styled.LoadingDiv>
  }

  if (error) {
    return (
      <span>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </span>
    )
  }

  const companies = data?.companies

  return (
    <Styled.Container>
      <CompaniesBySectors data={companies} />
      <CompaniesByInvestmentSize companies={companies} />
      <CompaniesOverview companies={companies} />
      <Styled.ButtonWrapper>
        <Styled.Button onClick={() => setShowModal(true)}>Add new company</Styled.Button>
      </Styled.ButtonWrapper>
      {showModal && <Modal onClose={() => setShowModal(false)} onSubmit={addCompany} />}
    </Styled.Container>
  )
}

export default Page
