import styled, { css } from 'styled-components'

export const Button = styled.div(
  ({ theme }) => css`
    width: 100%;
    background: ${theme.colors.green};
    border-radius: 20px;
    text-align: center;
    &:hover {
      cursor: pointer;
    }
  `,
)

export const Text = styled.span(
  ({ theme }) => css`
    display: block;
    font-weight: 800;
    color: ${theme.colors.text};
    padding: 12px 20px;
  `,
)
