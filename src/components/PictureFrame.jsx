import styled from 'styled-components'

const Frame = styled.div`
  display: flex;
  border: 5px solid ${props => props.frameColor};
  background: white;
  padding: ${props => props.padding};
  grid-column: ${props => props.pos.c};
  grid-row: ${props => props.pos.r};`

const Img = styled.div`
  background-image: ${props => 'url(' + props.url + ')'};
  background-size: cover;
  height: 100%;
  width: 100%;
  background-position: center;
  box-shadow: inset 1px 1px 5px 0px #d0d0d0;`

export default function PictureFrame(props){
  const { size, url, frameColor, pos, padding } = props

  return <Frame frameColor={frameColor} pos={pos} padding={padding}>
    <Img url={url}/>
  </Frame>
}
