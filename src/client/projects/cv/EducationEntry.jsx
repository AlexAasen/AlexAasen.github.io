import styled from 'styled-components'
import { TimeLabel, WorkTitle, Line } from './styles'
import Keywords from './Keywords'

const Entry = styled.div`
  display: flex;
  margin-bottom: 30px;`

const Img = styled.img`
  margin-right: 20px;
  height: 90px;
  width: 90px;`

const Paragraph = styled.p`
  margin-bottom: 20px;`

export default function CareerEntry(props){
  return <Entry>
    <Img src={props.img}/>
    <div>
      <h3>{props.instutution}</h3>
      <TimeLabel>{props.duration}</TimeLabel>
      <WorkTitle>{props.title}</WorkTitle>
      <Line />
      <Paragraph>{props.description}</Paragraph>
      <Keywords keywords={props.keywords}/>
    </div>
  </Entry>
}
