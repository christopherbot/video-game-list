import styled from 'styled-components'
import Button from './button'

const ThemeButton = styled(Button)`
  position: fixed;
  top: ${props => props.theme.spacing.default}px;
  right: ${props => props.theme.spacing.default}px;
  font-size: 20px;
`

export default ThemeButton
