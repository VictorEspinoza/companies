import React from 'react'

import Heading from '@client/components/Heading'
import { CompanyType } from '@client/graphql'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

import { Doughnut } from 'react-chartjs-2'
import * as Styled from './index.styles'

interface Props {
  companies?: CompanyType[]
}

ChartJS.register(ArcElement, Tooltip, Legend)

const BACKGROUND_COLORS = [
  'green',
  'greenyellow',
  'orange',
  'tomato',
  'purple',
  'slateblue',
  'maroon',
  'teal',
  'aqua',
  'fuchsia',
]

const CompaniesByInvestmentSize: React.FC<Props> = ({ companies = [] }) => {
  if (!Object.keys(companies).length) {
    return null
  }
  const options = {
    maintainAspectRatio: false,
    cutout: 100,
    plugins: {
      legend: {
        display: true,
        position: 'right',
        align: 'center',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
    },
  }
  const data = {
    labels: companies.map((company: CompanyType) => company.name),
    datasets: [
      {
        data: companies.map((company: CompanyType) => company.investmentSize),
        backgroundColor: companies.map(() => BACKGROUND_COLORS[Math.floor(Math.random() * BACKGROUND_COLORS.length)]),
        borderWidth: 0,
      },
    ],
  }

  return (
    <Styled.Section>
      <Heading>Companies by investment size</Heading>
      <Styled.ChartContainer>
        <Styled.CenterContainer>
          <Styled.CenterTextNumber>{companies?.length}</Styled.CenterTextNumber>
          <Styled.CenterLabelText>{companies?.length > 1 ? ' companies' : ' company'}</Styled.CenterLabelText>
        </Styled.CenterContainer>
        <Styled.DoughnutContainer>
          <Doughnut data={data} options={options} />
        </Styled.DoughnutContainer>
      </Styled.ChartContainer>
    </Styled.Section>
  )
}

export default CompaniesByInvestmentSize
