import styled from 'styled-components'
import { TimeLabel, WorkTitle, Line } from './styles'

const Entry = styled.div`
  display: flex;
  margin-bottom: 30px;`

const Img = styled.img`
  margin-right: 20px;
  height: 90px;
  width: 90px;`

export default function CareerEntry(props){
  return <Entry>
    <Img src={props.img}/>
    <div>
      <h3>{props.company}</h3>
      <TimeLabel>{props.duration}</TimeLabel>
      <WorkTitle>{props.title}</WorkTitle>
      <Line />
      <p>{props.description}</p>
    </div>
  </Entry>
}
