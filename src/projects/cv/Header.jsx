import styled from 'styled-components'
import { Line } from './styles'

const StyledHeader = styled.div`
  display: flex;`

const Portrait = styled.img`
  height: 180px;
  border-radius: 50%;
  margin: 10px 30px;`

const Content = styled.div`
  padding: 20px 30px 40px 30px;
  display:flex;
  flex-direction: column;
  border-left: 1px solid black;
  flex: 1;
  position: relative;`

const Upper = styled.div`
  display: flex;`

const H1 = styled.h1`
  margin: 5px 0;
  letter-spacing: .6px;`

const Specialization = styled.img`
  position: relative;
  height: 40px;
  top: 4px;
  margin-left: 25px;
  &:nth-child(2){
    margin-left: 90px;
  }`

export default function Header(props){
  return <StyledHeader className="header-container">
    <Portrait src="src/static/img/cv/me.jpg" />
    <Content>
      <Upper>
        <H1>Alexandra Aasen</H1>
        <Specialization src="src/static/img/cv/1562726.png" />
        <Specialization src="src/static/img/cv/react-logo.png" />
        <Specialization src="src/static/img/cv/HTML5_CSS_JavaScript.png" />
      </Upper>
      <p className="career-title">{props.tagline}</p>
      <Line className="horizontal-line" />
      <p className="ingress">{props.header}</p>
    </Content>
  </StyledHeader>
}
