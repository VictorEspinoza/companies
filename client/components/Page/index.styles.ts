import styled from 'styled-components'

// eslint-disable-next-line import/no-named-default
import { default as ButtonComponent } from '@client/components/Button'

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

export const LoadingDiv = styled.div`
  text-align: center;
`

export const ButtonWrapper = styled.div`
  max-width: 216px;
  margin: 17px auto 0 auto;
`

export const Button = styled(ButtonComponent)`
  & span {
    font-weight: 800;
  }
`
