import styled from 'styled-components'

import icons from 'variables/icons'

export default styled.span`
  ${props => icons[props.icon]}`
