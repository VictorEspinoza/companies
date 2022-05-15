import React from 'react'

import { ReactComponent as FintechSvg } from '@assets/fintech.svg'
import { ReactComponent as InsuranceSvg } from '@assets/insurance.svg'
import { ReactComponent as IotSvg } from '@assets/iot.svg'
import { ReactComponent as RobotSvg } from '@assets/robot.svg'

import styled from 'styled-components'

import * as Styled from './index.styles'

interface Props {
  kind: string
}

const getIcon = (kind: string) => {
  let icon

  switch (kind.toLocaleLowerCase()) {
    case 'insuretech':
      icon = InsuranceSvg
      break
    case 'iot':
      icon = IotSvg
      break
    case 'roboadvisory':
      icon = RobotSvg
      break
    case 'fintech':
    default:
      icon = FintechSvg
  }

  return icon
}
const Icon: React.FC<Props> = ({ kind }) => {
  const IconComponent = styled(getIcon(kind))`
    width: 100%;
  `

  return (
    <Styled.Container>
      <IconComponent />
    </Styled.Container>
  )
}

export default Icon
