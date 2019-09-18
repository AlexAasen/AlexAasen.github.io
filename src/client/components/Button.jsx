import styled from 'styled-components'
import fonts from 'variables/fonts'
import colors from 'variables/colors'

export default styled.button`
  border: 1px solid ${colors.primary};
  background: white;
  padding: 10px 22px;
  color: ${colors.primary};
  cursor: pointer;
  font-family: ${fonts.roboto};`
