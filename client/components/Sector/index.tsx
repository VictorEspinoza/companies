import React from 'react'

import * as Styled from './index.styles'

interface Props {
  sector: string
  count: number
}

const Sector: React.FC<Props> = ({ sector, count }) => (
  <Styled.Container>
    <Styled.InfoWrapper>
      <Styled.CountCategoryWrapper>
        <Styled.Count>{count}</Styled.Count>
        <Styled.SectorName>{sector}</Styled.SectorName>
      </Styled.CountCategoryWrapper>
      <Styled.IconWrapper>
        <Styled.Icon kind={sector} />
      </Styled.IconWrapper>
    </Styled.InfoWrapper>
  </Styled.Container>
)

export default Sector
