import styled from 'styled-components'
import Button from './button'

const buttonColor = ({ theme, state }) => {
  switch (state) {
    case 1:
      return theme.colors.filterButtonOn
    case 2:
      return theme.colors.filterButtonOff
    default:
      return theme.colors.filterButton
  }
}

const FilterButton = styled(Button)`
  background-color: ${buttonColor};
  height: 40px;
  padding: 0 ${props => props.theme.spacing.default}px;
`

export default FilterButton
