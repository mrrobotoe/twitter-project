import styled from 'styled-components'

interface BoxProps {
  padding?: string
  $borderThickness?: string
  inverted?: boolean
  children: React.ReactNode
}

export const Box = styled.div<BoxProps>`
  color: var(--color-dark);
  padding: ${(props) => (props.padding ? `${props.padding}rem` : `var(--s0)`)};
  background-color: '#fff';
  border: ${(props) =>
    props.$borderThickness
      ? `${props.$borderThickness}px black solid`
      : `var(--border-thin) black solid`};
  outline: 0.125rem solid transparent;
  outline-offset: -0.125rem;
  box-shadow: none;
  filter: ${(props) => props.inverted && 'invert(100%)'};

  & * {
    color: inherit;
  }
`
