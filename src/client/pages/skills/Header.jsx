import styled from 'styled-components'
import fonts from 'variables/fonts'
import colors from 'variables/colors'

import Icon from 'components/Icon'

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px 60px;
  text-align: center;
  max-width: 820px;
  margin: auto;`

const H2 = styled.h2`
  ${fonts.arapey};
  margin: 0 0 20px;
  font-size: 51px;
  line-height: 60px;
  @media (max-width: 985px){
    font-size: 40px;
    line-height: 42px;
  }`

const Quote = styled(Icon)`
  color: ${colors.mistyPink};
  font-size: 30px;
  margin-bottom: 15px;`

export default function Header(){
  return <StyledHeader>
    <Quote icon="quotesLeft" />
    <H2>You can only become truly accomplished at something you love. I love to bring ideas to life.</H2>
  </StyledHeader>
}
