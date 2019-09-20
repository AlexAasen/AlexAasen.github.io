import styled, { keyframes } from 'styled-components'
import handleResize from './handleResize'

const Section = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  overflow-y: auto;`

const List = styled.ol`
  padding: 0;
  margin: 0;
  flex: 1;`

const anim = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }`

const Img = styled.img`
  transition: all .3s;
  animation: ${anim} .3s ease;
  margin: ${props => props.onlyMarginBot ? "0 0 20px 0" : "0 20px 20px 0"};
  width: ${props => props.width};
  height: ${props => props.height};`

export default function FeedComponent(props){
  const { imgs } = props

  const dividedImgs = handleResize(imgs)

  const imgMarkup = dividedImgs.map((column, colIdx) => {
    return <List key={colIdx}>{column?.map((img, imgIdx) => {
      return <Img key={imgIdx}
        width={img.width}
        height={img.height}
        onlyMarginBot={colIdx === dividedImgs.length - 1}
        src={img.src}></Img>
    })}</List>
  })

  return <Section id="newsfeed-content">
    {imgMarkup}
  </Section>
}
