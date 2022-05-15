import styled, { css } from 'styled-components'
// eslint-disable-next-line import/no-named-default
import { default as ButtonComponent } from '@client/components/Button'

export const Modal = styled.div(
  ({ theme }) => css`
    position: absolute;
    left: 35%;
    top: 150px;
    right: 0;
    bottom: 0;
    background-color: ${theme.colors.bg};
    max-width: 640px;
    border-radius: 10px;
  `,
)

export const Content = styled.div`
  position: relative;
  padding: 0 40px;
`

export const CloseIcon = styled.div(
  ({ theme }) => css`
    position: absolute;
    right: 30px;
    top: 0;
    width: 20px;
    height: 20px;

    &:hover {
      cursor: pointer;
    }

    &:before,
    :after {
      position: absolute;
      left: 15px;
      content: ' ';
      height: 20px;
      width: 2px;
      background-color: ${theme.colors.greyLight};
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  `,
)

export const Header = styled.div(
  ({ theme }) => css`
    padding-top: 30px;
    padding-bottom: 30px;
    position: relative;
    background: ${theme.colors.greyHover};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  `,
)

export const Heading = styled.div`
  font-size: 22px;
  font-weight: 800;
  line-height: 28px;
`

export const Description = styled.div(
  ({ theme }) => css`
    margin-top: 5px;
    color: ${theme.colors.greyLight};
  `,
)

export const Body = styled.div`
  margin-bottom: 73px;
`

export const AddCompanyButtonWrapper = styled.div`
  min-width: 100px;
  max-width: 161px;
  max-height: 40px;
`

export const CancelButton = styled(ButtonComponent)(
  ({ theme }) => css`
    background: ${theme.colors.bg};

    & span {
      color: ${theme.colors.greyLight};
      font-weight: 800;
    }
  `,
)

export const Form = styled.div`
  margin-top: 40px;
  padding: 0 40px;
`

export const FormItem = styled.div`
  margin-bottom: 20px;
`

export const Footer = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  justify-content: end;
`
