import React from 'react'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  padding-right: 15px;
`

export const LabelText = styled.label<{ hasError?: boolean }>(
  ({ theme, hasError }) => css`
    color: ${hasError ? theme.colors.red : theme.colors.text};
    font-size: 13px;
    font-weight: 600;
  `,
)

export const Input = styled.input<React.HTMLProps<HTMLInputElement>>(
  ({ theme }) => css`
    margin-top: 5px;
    padding: 13px 0 13px 15px;
    outline: none;
    border: none;
    width: 100%;
    font-size: 15px;
    line-height: 19px;
    color: ${theme.colors.greyLight};
    background: ${theme.colors.bg};
    border: 1px solid ${theme.colors.text};
    border-radius: 4px;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }
  `,
)

export const Unit = styled.div(
  ({ theme }) => css`
    color: ${theme.colors.textLight};
    position: absolute;
    right: 11px;
    bottom: 13px;
  `,
)
