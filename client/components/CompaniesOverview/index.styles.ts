import styled, { css } from 'styled-components'

export const Table = styled.table(
  ({ theme }) => css`
    background: ${theme.colors.greyHover};
    border-radius: 10px;
    border-collapse: collapse;
  `,
)

export const TableHeader = styled.th<{ leftAligned?: boolean }>(
  ({ leftAligned }) => `
  text-align: ${leftAligned ? 'left' : 'right'};
  font-size: 10px;
  min-width: 225px;
  padding: 25px;
`,
)

export const TableRow = styled.tr<{ even: boolean }>(
  ({ theme, even }) => `
  background: ${even ? theme.colors.bg : theme.colors.greyHover};
`,
)

export const TableCell = styled.td<{ leftAligned?: boolean }>(
  ({ leftAligned }) => `
  text-align: ${leftAligned ? 'left' : 'right'};
  font-size: 14px;
  min-width: 225px;
  padding: 25px;
  border: none;
  
  
  &:first-of-type {
    font-weight: bold;
  }
`,
)
