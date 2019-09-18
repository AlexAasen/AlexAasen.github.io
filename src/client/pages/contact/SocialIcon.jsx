import styled from 'styled-components'

const Icon = styled.span`
  font-family: icons;
  font-size: 30px;
  margin:auto;
  &:before{ content: ${props => "'" + props.icon + "'"}; }`

const IconItem = styled.a`
  color: #2c3235;
  padding: 2px 3px 4px;
  border: 3px solid lightgrey;
  border-radius: 50%;
  margin: 0 15px;
  width: 50px;
  height: 50px;
  justify-content: center;
  vertical-align: middle;
  display: flex;
  cursor: pointer;
  transition: border-color .8s;
  &:hover{
    border-color: #2c3235;
  }`

export default function SocialIcon(props){
  const { item } = props

  return <IconItem
    className="menu-item" href={item.href} target="_blank" alt={item.alt}>
    <Icon icon={item.icon} role="icon" />
  </IconItem>
}
