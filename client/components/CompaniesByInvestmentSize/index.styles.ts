import styled, { css } from 'styled-components'

export const Section = styled.div`
  margin-bottom: 100px;
`

export const ChartContainer = styled.div(
  ({ theme }) => css`
    position: relative;
    max-height: 350px;
    height: 60vh;
    position: relative;
    padding: 1%;
    width: 100%;
    min-width: 1100px;
    background: ${theme.colors.greyHover};
    border-radius: 10px;
  `,
)

export const CenterContainer = styled.div`
  position: absolute;
  top: 130px;
  left: 220px;
`

export const DoughnutContainer = styled.div`
  height: 300px;
  width: 600px;
  position: relative;
  margin-bottom: 1%;
  padding: 1%;
`

export const CenterTextNumber = styled.div`
  font-size: 35px;
  font-weight: 800;
  text-align: center;
`

export const CenterLabelText = styled.div`
  font-weight: 800;
  text-align: center;
`
