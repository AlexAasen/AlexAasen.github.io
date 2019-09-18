import styled from 'styled-components'
import mixins from 'variables/mixins'
import icons from 'variables/icons'

const StyledContactInfo = styled.div`
  ${mixins.columns('3', '20px')}
  padding: 20px 30px 10px;`

const Entry = styled.div`
  display: flex;
  margin: 0 6px 6px 6px;`

const Icon = styled.span`
  ${props => icons[props.icon]}
  margin-right:6px;`

export default function ContactInfo(props) {
  return <StyledContactInfo>
    <Entry>
      <Icon icon="mail"></Icon>
      <p>alexaasen@outlook.com</p>
    </Entry>
    <Entry>
      <Icon icon="location"></Icon>
      <p>Stockholm, Sverige</p>
    </Entry>
    <Entry>
      <Icon icon="linkedin"></Icon>
      <p>linkedin.com/in/alexandra-aasen/</p>
    </Entry>
    <Entry>
      <Icon icon="attachment"></Icon>
      <p>alexaasen.github.io</p>
    </Entry>
    <Entry>
      <Icon icon="mobile"></Icon>
      <p>073 733 99 57</p>
    </Entry>
  </StyledContactInfo>
}
