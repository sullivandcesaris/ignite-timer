import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  color: ${(props) => props.theme['gray-100']};

  font-size: 1.125rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  color: ${(props) => props.theme['gray-100']};

  font-size: 10rem;
  line-height: 8rem;

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`
export const Separator = styled.div`
  width: 4rem;
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};

  overflow: hidden;
  display: flex;
  justify-content: center;
`
const BaseInput = styled.input`
  height: 2.5rem;
  background: transparent;
  padding: 0 0.5rem;

  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};

  color: ${(props) => props.theme['gray-100']};
  font-weight: bold;
  font-size: 1.125rem;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`
export const MinutesAmountInput = styled(BaseInput)`
  width: 3rem;
`

export const StartCountdownButton = styled.button`
  width: 100%;
  background: ${(props) => props.theme['green-500']};

  padding: 1rem;
  border: 0;
  border-radius: 8px;

  color: ${(props) => props.theme['gray-100']};
  font-weight: bold;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  transition: background 0.1s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`
