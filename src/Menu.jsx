import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Header = styled.div`
  display: flex;
  flex-direction:column;
  margin: auto;
  width: fit-content;`

const Logo = styled.span`
  font-family: icons;
  background: black;
  color: white;
  line-height: 120px;
  font-size: 120px;
  padding: 12px;
  margin: 20px auto;
  &:before{ content: '\\e900'; }`

const Title = styled.p`
  margin: 0px auto 15px;
  font-size: 45px;
  line-height: 45px;
  font-family: roboto;`

const Actions = styled.div`
  display: flex;
  margin: 10px 0 20px;`

const Action = styled(NavLink)`
  margin: auto 20px;
  font-family: 'Josefin Sans';
  text-decoration: none;
  cursor: pointer;
  &:before{ content: ${props => "'" + props.label + "'" }; }
  &.active span { width: 100%; }`

const HoverLine = styled.span`
  height: 1px;
  background: black;
  width: 0;
  margin: 3px auto;
  display: block;
  transition: width .3s;
  ${Action}:hover & {
    width: 100%;
  }`

export default function Menu(){
  return <Header>
    <Logo />
    <Title>Alex Aasen</Title>
    <Actions>
      <Action label="Projects" to="/projects">
        <HoverLine />
      </Action>
      <Action label="Skills" to="/skills">
        <HoverLine />
      </Action>
      <Action label="Artwork" to="/artwork">
        <HoverLine />
      </Action>
      <Action label="Contact" to="/contact">
        <HoverLine />
      </Action>
    </Actions>
  </Header>
}
