const React = require('react')
import styled from 'styled-components'

import social from 'constants/social'
import fonts from 'variables/fonts'
import SocialIcon from './SocialIcon'

const Page = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  overflow-y: auto;
  width: 100%;
  margin: auto;`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto auto auto 25px;`

const ConnectIcon = styled.span`
  font-size: 170px;
  line-height: 170px;
  font-family: icons;
  color: #cecdcd;
  margin: 100px auto 20px;
  cursor: default;
  &:hover{
    color: #2c3235;
    transition: all .8s ease;
  }
  &:before{ content: "\\e91b" }`

const H2 = styled.h2`
  ${fonts.arapey}
  font-size: 60px;
  margin: 0 0 20px;`

const H4 = styled.h4`
  ${fonts.josefin}`

const Img = styled.img`
  margin: 0 25px 0 auto;
  height: calc(100vh - 297px);`

const SocialMenu = styled.ol`
  display: flex;
  margin: 40px 0 120px;
  padding: 0;
  justify-content: center;`

export default function Contact() {
  const socialMarkup = social.links.map((item, idx) => <SocialIcon key={idx} item={item}/>)

  return(
    <Page>
      <Img src="src/client/static/img/swan.jpg" />
      <Info>
        <ConnectIcon />
        <H2>Let's connect!</H2>
        <H4 className="email">alexaasen@outlook.com</H4>
        <SocialMenu>
          {socialMarkup}
        </SocialMenu>
      </Info>
    </Page>)
}
