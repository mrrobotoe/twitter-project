import styled from 'styled-components'

import { Box } from 'src/styles/Box/Box.styled'

export const Header = styled.h1`
  transition: color 120ms ease-in;
  &:hover {
    color: #0073ff;
  }
`
export const Button = styled(Box)`
  background-color: #fff;
  position: relative;
  &:hover {
    background-color: #d8d8d8;
  }
`

export const ToolTip = styled(Box)`
  position: absolute;
  background-color: #333;
  color: #fff;
  top: 140%;
  right: 28%;

  &::after {
    content: '';
    width: 20px;
    height: 20px;
    top: -14%;
    right: 40%;
    position: absolute;
    background-color: #333;
    border: 1px solid black;
    transform: rotate(45deg);
    border: 1px solid black;
    border-bottom: transparent;
    border-right: transparent;
  }
`
