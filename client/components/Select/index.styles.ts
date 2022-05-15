import React from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const Wrapper = styled.div(
  ({ theme }) => css`
    position: relative;

    &:after {
      content: '';
      display: inline-block;
      position: absolute;
      right: 20px;
      bottom: 24px;
      border: solid ${theme.colors.text};
      border-width: 0 1px 1px 0;
      padding: 3px;
      transform: rotate(45deg);
      pointer-events: none;
    }
  `,
)

export const LabelText = styled.span<{ hasError?: boolean }>(
  ({ theme, hasError }) => css`
    color: ${hasError ? theme.colors.red : theme.colors.text};
    font-size: 13px;
    font-weight: 600;
  `,
)

export const Select = styled.select<React.HTMLProps<HTMLSelectElement>>(
  ({ theme }) => css`
    appearance: none;
    margin-top: 5px;
    background-color: ${theme.colors.bg};
    border-radius: 4px;
    padding: 14px 0 14px 15px;
    border: 1px solid ${theme.colors.text};
    width: 100%;
    font-size: 15px;
    color: ${theme.colors.greyLight};
  `,
)
