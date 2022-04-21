import styled from 'styled-components'
import DialogTitle from '@mui/material/DialogTitle'
import theme from 'styles/theme'

export const Wrapper = styled.main`
  background-color: ${theme.colors.primary};
  color: #fff;
  width: 100%;
  height: 100vh;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Title = styled(DialogTitle)({
  fontSize: '5rem'
})

export const Description = styled.h2`
  font-size: 4rem;
  font-weight: 400;
`
