import styled from 'styled-components'

import { Submit, TextAreaField } from '@redwoodjs/forms'

export const SubmitButton = styled(Submit)`
  padding: 0.5rem 1rem;
  background-color: #fff;
  border: 1px solid black;

  &:hover {
    background-color: #ededed;
  }

  &:disabled {
    background-color: #a5a1a1;
    color: #ededed;
  }
`

export const TextArea = styled(TextAreaField)`
  padding: var(--s0);
  resize: vertical;
`
