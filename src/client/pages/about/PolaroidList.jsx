import styled from 'styled-components'
import aboutEntries from 'constants/about'

import Polaroid from './Polaroid'

const StyledPolaroid = styled(Polaroid)`
  margin-top: ${props => props.marginTop};
  max-width: 600px;
  min-width: calc(33% - 80px);
  &:nth-child(2){
    height: 500px;
    div{ height: 400px; }
  }
  &:nth-child(3){
    height: 450px;
    div{ height: 350px; }
  }
  @media(max-width: 1583px){
    min-width: calc(50% - 80px);
    &:nth-child(3){
      height: 550px;
      div{ height: 450px; }
    }
  }
  @media(max-width: 1000px){ min-width: calc(100% - 80px); }`

  export default function PolaroidList(props){
    const { width } = props

    return aboutEntries.map((entry, idx) => {
      const { url, description } = entry
      let marginTop = 10

      if((width > 983) && (width <= 1583)){
        if((idx !== 0) && (idx !== 1) && (idx % 2 !== 0)){
          marginTop = -40
        }
      }
      else if(width > 1583){
        marginTop = ((idx !== 0) && (idx !== 1) && (idx !== 2) &&
        ((idx - 4) % 3 === 0)) ? -40 :
          ((idx !== 0) && (idx !== 2) && ((idx + 1) % 3 === 0) ? -90 : 10)
      }

      return <StyledPolaroid marginTop={marginTop}
          description={description}
          url={url}
          key={idx}/>
    })
  }
