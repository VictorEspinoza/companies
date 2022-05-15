import styled, { css } from 'styled-components'
import IconComponent from '../Icon'

export const Container = styled.div(
  ({ theme }) => css`
    flex-grow: 1;
    flex-basis: 0;
    background: ${theme.colors.grey};
    border-radius: 10px;
    margin-right: 20px;

    &:last-of-type {
      margin-right: 0px;
    }

    &:hover {
      background: ${theme.colors.greyHover};
      cursor: pointer;
    }
  `,
)

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 36px 30px;
`

export const CountCategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Count = styled.div`
  font-weight: 700;
  font-size: 38px;
  line-height: 48px;
`

export const SectorName = styled.div(
  ({ theme }) => css`
    color: ${theme.colors.greyLight};
  `,
)

export const IconWrapper = styled.div`
  heigth: 55px;
  width: 55px;
`

export const Icon = styled(IconComponent)`
  min-width: 55px;
`
